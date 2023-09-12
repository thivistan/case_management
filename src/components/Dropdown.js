import React, { useState, useRef } from 'react';
import { FlatList, Text, TouchableOpacity, Modal, View, Platform, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * A single-select dropdown menu component.
 *
 * @param {Object} props - Component props.
 * @param {String} props.label - The label to display above the dropdown.
 * @param {Array} props.data - An array of item objects. Each item must have an associated label.
 * @param {Function} props.onSelect - A callback function to handle the selected item.
 * @param {Object} props.styles - An object containing styles for the component.
 * @returns {React.Component} The rendered Dropdown component.
 */
export default function Dropdown({ label, data, onSelect, styles }) {
    const DropdownBtn = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [dropdownStyles, setDropdownStyles] = useState({
        top: 0,
        left: 0,
        width: 0,
    })


    function toggleDropdown() {
        visible ? setVisible(false) : openDropdown();
    };

    function openDropdown() {
        DropdownBtn.current.measure((fx, fy, width, height, px, py) => {
            setDropdownStyles({
                ...dropdownStyles,
                top: Platform.OS === 'android' ? py : py + height,
                left: px,
                width,
            })
        });
        setVisible(true);
    };

    function onItemPress(item) {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => onItemPress(item)}
            >
                <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
        );
    };

    function renderDropdown() {
        return (
            <Modal
                visible={visible}
                transparent
                animationType='none'
            >
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={[styles.dropdown, dropdownStyles]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    return (
        <TouchableOpacity
            ref={DropdownBtn}
            style={styles.btn}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text style={styles.btnText}>
                {label}
            </Text>
            <Icon
                style={styles.icon}
                name='chevron-down-outline'
            />
        </TouchableOpacity>
    );
};
