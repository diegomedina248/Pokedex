import { StyleSheet } from 'react-native';

import { WHITE, MOJO } from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    zIndex: 2,
  },
  listContainer: {
    zIndex: 1,
    marginTop: -45,
  },
  contentContainer: {
    paddingHorizontal: 6,
    paddingBottom: 170,
    paddingTop: 65,
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginRight: 10,
  },
  itemContainer: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 130,
    overflow: 'hidden',
  },
  itemNumber: {
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.3,
    alignSelf: 'flex-end',
    paddingRight: 16,
    paddingTop: 6,
  },
  itemName: {
    textTransform: 'capitalize',
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 16,
    paddingBottom: 10,
  },
  itemImageContainer: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    right: 0,
    overflow: 'visible',
  },
  itemImageBackground: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 85,
    height: 85,
    resizeMode: 'cover',
    tintColor: WHITE,
    opacity: 0.2,
  },
  itemImage: {
    width: 70,
    height: 70,
  },
  listLoadingContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listLoadingImage: {
    tintColor: MOJO,
  },
});

export default styles;
