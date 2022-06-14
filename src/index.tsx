import React from 'react'
import { StyleSheet, View } from 'react-native'

import { isFlagCode, RoundFlagCode, RoundFlagCodes } from './flagMap'

type Props = {
    code: string
    size?: number
    testID?: string
}

export const RoundFlag: React.FC<Props> = ({ code, size = 10, testID }) => {
    if (!code || !isFlagCode(code)) {
        return null
    }

    const flagCode = code.toUpperCase()
    const Flag = RoundFlagCode[flagCode as RoundFlagCodes].default
    const styles = StyleSheet.create({
        container: {
            width: size || 10,
            height: size || 10,
            borderRadius: size || 10,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        },
        svg: {
            borderRadius: 0,
        },
    })

    return (
        <View style={styles.container} testID={`${testID}_container`}>
            <Flag
                testID={`${testID}_${flagCode}_flag`}
                height={size}
                width={size}
                style={styles.svg}
            />
        </View>
    )
}
