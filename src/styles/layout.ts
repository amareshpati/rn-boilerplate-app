import { StyleSheet } from 'react-native';

/**
 * Reusable layout utility styles
 * Note: Consider migrating to component-specific styles for better maintainability
 */
const Layouts = StyleSheet.create({
    // POSITIONING
    absolute: {
        position: 'absolute',
    },
    relative: {
        position: 'relative',
    },
    over: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },

    // ALIGN ITEMS
    alignBaseline: {
        alignItems: 'baseline',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignStretch: {
        alignItems: 'stretch',
    },

    // JUSTIFY CONTENT
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    spaceAround: {
        justifyContent: 'space-around',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    spaceEvenly: {
        justifyContent: 'space-evenly',
    },

    // ALIGN SELF
    selfBaseline: {
        alignSelf: 'baseline',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    selfStart: {
        alignSelf: 'flex-start',
    },
    selfStretch: {
        alignSelf: 'stretch',
    },

    // COMMON COMBINATIONS
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    centerVertical: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // FLEX CONTAINER
    container: {
        flex: 1,
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    flexGrow: {
        flexGrow: 1,
    },
    flexShrink: {
        flexShrink: 1,
    },

    // FLEX DIRECTION
    flexColumn: {
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexWrap: {
        flexWrap: 'wrap',
    },

    // DIMENSIONS
    fullHeight: {
        height: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    fullHeightAndWidth: {
        height: '100%',
        width: '100%',
    },
    halfWidth: {
        width: '50%',
    },

    // OVERFLOW
    overflowHidden: {
        overflow: 'hidden',
    },

    // TEXT
    centeredText: {
        textAlign: 'center',
    },

    // BORDERS
    borderBottom: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    borderTop: {
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    bordered: {
        borderWidth: StyleSheet.hairlineWidth,
    },
    borderedThick: {
        borderWidth: 2,
    },
});

export default Layouts;