import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { createAssetAsync, createAlbumAsync, requestPermissionsAsync, getAlbumAsync, addAssetsToAlbumAsync } from 'expo-media-library';

export default function JournalScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            const { status: mediaLibStatus } = await requestPermissionsAsync();

            setHasPermission(cameraStatus === 'granted' && mediaLibStatus === 'granted');
        })();
    }, []);

    async function takePicture() {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            const asset = await createAssetAsync(photo.uri);
            const album = await getAlbumAsync('Thaddeus');

            if (album === null) {
                await createAlbumAsync('Thaddeus', asset, false);
            } else {
                await addAssetsToAlbumAsync([asset], album, false);
            }
        }
    };

    const [isRecording, setIsRecording] = useState(false);

    async function recordVideo() {
        if (!cameraRef) return;

        if (isRecording) {
            setIsRecording(false);
            cameraRef.stopRecording();
            console.log("Stopped recording");
        } else {
            setIsRecording(true);
            try {
                const video = await cameraRef.recordAsync({ quality: '720p' });
                console.log("Finished recording");

                const asset = await createAssetAsync(video.uri);
                const album = await getAlbumAsync('Thaddeus');

                if (album === null) {
                    await createAlbumAsync('Thaddeus', asset, false);
                    console.log("Created new album");
                } else {
                    await addAssetsToAlbumAsync([asset], album, false);
                    console.log("Added video to album");
                }
            } catch (error) {
                console.error("Error recording video:", error);
            } finally {
                setIsRecording(false);
            }
        }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={takePicture}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Snap </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={recordVideo}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            {isRecording ? "Stop" : "Record"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </SafeAreaView>
    );
}