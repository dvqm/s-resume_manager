import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class PdfResume extends React.Component {
  constructor(props) {
    super(props);

    this.resume = props.resume;
  }
}

export default PdfResume;
