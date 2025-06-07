"use client"
import { AuthContext } from '@/context/AuthContext';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from '@/hooks/use-theme';


function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user } = useUser();
    const { theme } = useTheme();

    useEffect(() => {
        user && createNewUser();
        // Apply theme class to html element
        document.documentElement.className = theme;
    }, [user, theme]);

    const createNewUser = async () => {
        const result = await axios.post('/api/user');
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook to use auth
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export default Provider

