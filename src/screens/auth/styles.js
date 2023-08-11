import { StyleSheet } from "react-native";
import {COLORS} from '../../themes'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    minHeight: 350,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: 5,
  },
  header: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.text,
    paddingVertical: 10,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  link: {},
  linkText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.violet,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.violet,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
    });