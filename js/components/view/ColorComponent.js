import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { borderWidth, padding, radius, styles } from "../../styles/Styles";

export const ColorComponent = ()=> {
    const [activeFilter, setActiveFilter] = useState('All');

  return (
    <TouchableOpacity style={[padding(16),borderWidth(0),styles.bgBlack,radius(100)]}>
        
    </TouchableOpacity>
  );
}

