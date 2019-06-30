import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  backItemContainer: {
    padding: 10,
    marginLeft: -10,
  },
  backItem: {
    width: 18,
    height: 18,
  },
  baseInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  name: {
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 6,
  },
  chips: {
    flexDirection: 'row',
  },
  itemImageContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
  itemImageBackground: {
    position: 'absolute',
    bottom: -25,
    alignSelf: 'center',
    width: 160,
    height: 160,
    resizeMode: 'cover',
    tintColor: '#FFFFFF',
    opacity: 0.2,
  },
  itemImage: {
    width: 140,
    height: 140,
  },
});

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentOuterContainer: {
    flex: 1,
  },
  contentInnerContainer: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flexGrow: 1,
    marginLeft: -1,
    marginRight: -1,
    backgroundColor: '#ffffff',
    paddingTop: 32,
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
});
