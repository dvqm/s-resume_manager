import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class PdfResume extends React.Component {
  constructor(props) {
    super(props);

    this.resume = props.resume;
  }
  render() {

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  section: {
    marginBottom: 12,
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
});

return <Document>
    <Page size="A4" style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>About</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Area of Expertise</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>My Projects</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Additional information</Text>
        <View style={styles.divider}></View>
      </View>
    </Page>
  </Document>
  }
}

export default PdfResume;
