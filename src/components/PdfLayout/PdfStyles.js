import { StyleSheet } from '@react-pdf/renderer';

export const s = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: '100%',
    fontSize: 12,
  },
  section: {
    marginVertical: 12,
  },
  article: {
    marginVertical: 6,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 20,

  },
  heading: {
    fontSize: 18,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    marginBottom: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 8,
  },
  viewer: {
    marginTop: 30,
    width: '100%',
    height: '180mm',
  },
  photo: {
    width: '20%',
    borderRadius: '50%',
  },
  title1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  title2: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '5px 20px',
  },
  dates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
});

