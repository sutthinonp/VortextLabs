import icons from '@/constants/icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderBlockProps = {
    title: string;
    showConfirm?: boolean;
    onConfirm?: () => void;
};

export default function HeaderBlock({ title, showConfirm, onConfirm }: HeaderBlockProps) {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const handleBack = () => {
        try {
            router.back();
        } catch {
            router.replace('/');
        }
    };

    return (
        <View>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    marginBottom: 16,
                }}
            >
                <TouchableOpacity
                    onPress={handleBack}
                    style={{
                        position: 'absolute',
                        left: 0,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={icons.backArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
                </TouchableOpacity>
                <Text
                    className='text-xl font-rubik-bold text-black'
                    style={{
                        alignSelf: 'center',
                    }}
                >
                    {title}
                </Text>

                {showConfirm && (
                    <TouchableOpacity
                        onPress={onConfirm}
                        style={{
                            position: 'absolute',
                            right: 16,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                        }}
                    >
                        <Text className='text-blue-500 font-rubik-semibold'>Confirm</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
