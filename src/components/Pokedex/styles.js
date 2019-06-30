import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 6,
    paddingTop: 110,
    paddingBottom: 20,
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
    color: 'white',
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
    tintColor: '#FFFFFF',
    opacity: 0.2,
  },
  itemImage: {
    width: 70,
    height: 70,
  },
});

export default styles;
