import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Model } from '../types';

// List item tipini tanımla
type ListItem = Model;

// Context tipi
interface ListContextType {
    list: Model[];
    addItem: (item: ListItem) => void;
    deleteItem: (id: number) => void;
}

// Context oluştur
const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
    const [list, setList] = useState<Model[]>([]);

    useEffect(() => {
        const loadList = async () => {
            try {
                const storedList = await AsyncStorage.getItem('list');
                if (storedList) {
                    setList(JSON.parse(storedList));
                }
            } catch (error) {
                console.error("Failed to load the list from storage", error);
            }
        };

        loadList();
    }, []);

    const addItem = async (item: ListItem) => {

        item.id = list.length + 1;
        const updatedList = [...list, item];
        setList(updatedList);
        try {
            await AsyncStorage.setItem('list', JSON.stringify(updatedList));
        } catch (error) {
            console.error("Failed to save the list to storage", error);
        }
    };

    const deleteItem = async (id: number) => {
        const updatedList = list.filter((listItem) => listItem.id !== id);
        setList(updatedList);
        try {
            await AsyncStorage.setItem('list', JSON.stringify(updatedList));
        } catch (error) {
            console.error("Failed to save the list to storage", error);
        }
    };


    return (
        <ListContext.Provider value={{ list, addItem, deleteItem }}>
            {children}
        </ListContext.Provider>
    );
};

export const useList = (): ListContextType => {
    const context = React.useContext(ListContext);
    if (context === undefined) {
        throw new Error('useList must be used within a ListProvider');
    }
    return context;
};
