import React from 'react-native'

export default React.StyleSheet.create({
  PillBar: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#FF4981',
    borderRadius: 5,
    borderWidth: 1,
    margin: 30,
  },
  Pill: {
    flex: 1,
    borderColor: '#FF4981',
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PillActive: {
    backgroundColor: '#FF4981',
    color: '#fff',
  },
  PillText: {
    color: '#FF4981',
  },
  PillActiveText: {
    color: '#fff',
  },
  PillFirst: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  PillLast: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },

  EventTypeIcon: {
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    padding: 15,
    fontSize: 20,
    width: 50,
    height: 50,
    textAlign: "center",
  },
});

