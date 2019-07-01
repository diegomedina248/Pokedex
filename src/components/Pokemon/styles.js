import { StyleSheet } from 'react-native';

import { WHITE, SILVER, SHARK, BLACK } from 'helpers/Colors';

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
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 28,
  },
  number: {
    color: WHITE,
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
    tintColor: WHITE,
    opacity: 0.2,
  },
  itemImage: {
    width: 140,
    height: 140,
  },
});

export const sizeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 30,
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: BLACK,
    shadowOpacity: 0.2,
  },
  item: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
    color: SILVER,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 4,
  },
  content: {
    textAlign: 'left',
    fontWeight: '500',
    color: SHARK,
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
    backgroundColor: WHITE,
    paddingTop: 32,
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  biology: {
    color: SHARK,
    lineHeight: 24,
    fontWeight: '500',
  },
});
