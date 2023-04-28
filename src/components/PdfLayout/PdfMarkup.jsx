import React from 'react';
import { Page, Text, View, Link, Image, Document, PDFViewer } from '@react-pdf/renderer';
import { s } from './PdfStyles';
import mainTheme from '../../mainTheme/globalTheme.js';
import { pdfStyles } from '../../mainTheme/localStyles'
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

class PdfResume extends React.Component {
  constructor(props) {
    super(props);

    this.resume = props.resume;
  }

  render() {
    const stringToNull = (obj) => {
      const clonedObj = JSON.parse(JSON.stringify(obj));

      if (Array.isArray(clonedObj)) {
        clonedObj.forEach((item, index) => {
          if (typeof item === 'object') {
            clonedObj[index] = stringToNull(item);
          } else if (item === '') {
            clonedObj[index] = null;
          }
        });
      } else {
        Object.entries(clonedObj).forEach(([key, value]) => {
          if (typeof value === 'object') {
            clonedObj[key] = stringToNull(value);
          } else if (value === '') {
            clonedObj[key] = null;
          }
        });
      }

      return clonedObj;
    };

    const staticFields = this.props.state.state.static;

    const currentCv = stringToNull(this.props.state.state.currentCv);

    return <Document>
      <Page size="A4" style={s.container}>
        <View style={s.section}>
          <Text style={s.heading}>{staticFields.about.header}</Text>
          <View style={s.divider}></View>
          <View style={s.flexRow}>
            {currentCv.about.photo ? <Image style={s.photo} src={currentCv.about.photo} /> : null}
            <View style={s.viewMainInfo}>

              <View style={s.flexRow}>
                <View>
                  <Text>
                    {currentCv.about.first && `${currentCv.about.first} `}
                    {currentCv.about.middle && `${currentCv.about.middle} `}
                    {currentCv.about.last}
                  </Text>
                  <Text>{currentCv.about.position}</Text>
                  <Text>
                    {currentCv.about.city && `${currentCv.about.city}, `}
                    {currentCv.about.state && `${currentCv.about.state}, `}
                    {currentCv.about.country}
                  </Text>
                </View>
                <View>
                  <Link src={`tel:${currentCv.about.tel}`}>
                    {currentCv.about.tel}
                  </Link>
                  <Link src={`mailto:${currentCv.about.email}`}>
                    {currentCv.about.email}
                  </Link>
                  <Link src={currentCv.about.linkedin}>
                    {currentCv.about.linkedin}
                  </Link>
                  <Link src={currentCv.about.gitHub}>
                    {currentCv.about.gitHub}
                  </Link>
                </View>
              </View>
            </View>
          </View>

        </View>

        <View style={s.section}>
          <Text style={s.heading}>{staticFields.summary.header}</Text>
          <View style={s.divider}></View>
          <Text>{currentCv.summary.summary}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>{staticFields.expertise.header}</Text>
          <View style={s.divider}></View>
          <View>
            {currentCv.expertise.map((item, index) => (
              <View style={s.flexColumn} key={index}>
                <Text style={s.title2}>{item.title}</Text>
                <View style={s.labels}>
                  {item.labels !== null && item.labels.split(', ').map((label, index) => (
                    <Text key={index}>{'·'} {label}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>{staticFields.projects.header}</Text>
          <View style={s.divider}></View>

          {currentCv.projects.map((item, index) => (
            <View style={s.article} key={index}>
              <Text style={s.title1}>{item.title}</Text>
              {item.startDate ||
                item.endDate ||
                item.currentlyWork ? (
                  <View style={s.dates}>
                    <Text>
                      {item.startDate}
                    </Text>
                    {(item.currentlyWork ||
                      item.endDate) && (
                        <Text>-</Text>
                      )}
                    <Text>
                      {item.currentlyWork
                        ? staticFields.projects.currentlyWork
                        : item.endDate}
                    </Text>
                  </View>
                ) : (
                  null
                )}

              {item.technologies && (
                <View style={s.flexRow}>
                  <Text style={s.title2}>
                    {staticFields.projects.technologies}
                  </Text>

                  <Text>
                    {item.technologies}
                  </Text>
                </View>
              )}

              <View>
                <Text style={s.title2}>
                  {staticFields.projects.description}
                </Text>

                <Text>
                  {item.description}
                </Text>
              </View>
              {item.deployUrl || item.sourceUrl ? (
                <View style={s.flexRow}>
                  {item.deployUrl ? (
                    <Link
                      src={item.deployUrl}
                    >{staticFields.projects.deployUrl}</Link>
                  ) : (
                      null
                    )}

                  {item.sourceUrl ? (
                    <Link
                      src={item.sourceUrl}
                    > {staticFields.projects.sourceUrl}</Link>
                  ) : (
                      null
                    )}
                </View>
              ) : (
                  null
                )}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>{staticFields.experiences.header}</Text>
          <View style={s.divider}></View>
          {currentCv.experiences.map((item, index) => (
            <View style={s.article} key={index}>
              <Text style={s.title1}>{item.title} at {item.company}</Text>

              <View style={s.flexRow}>
                <View style={s.flexRow}>
                  <Text>
                    {staticFields.experiences.employmentType}
                  </Text>
                  <Text>
                    {item.employmentType}
                  </Text>
                </View>

                <View style={s.flexRow}>
                  <Text>
                    {staticFields.experiences.contractType}
                  </Text>
                  <Text>
                    {item.contractType}
                  </Text>
                </View>
              </View>

              <View style={s.dates}>
                <Text>
                  {item.startDate !== null ? item.startDate : null}
                </Text>
                {item.currentlyWork ? (
                  <>
                    <Text>-</Text>
                    <Text>Currently work</Text>
                  </>
                ) : (
                    <>
                      <Text>-</Text>
                      <Text>
                        {item.endDate !== null ? item.endDate : null}
                      </Text>
                    </>
                  )}
              </View>

              {item.location !== null && item.location.length > 0 && (
                <View style={s.flexRow}>
                  <Text>
                    {staticFields.experiences.location}
                  </Text>
                  <Text>
                    {item.location}
                  </Text>
                </View>
              )}

              <View>
                <Text>
                  {staticFields.experiences.description}
                </Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>{staticFields.educations.header}</Text>
          <View style={s.divider}></View>

          {currentCv.educations.map((item, index) => (
            <View style={s.article} key={index}>
              <Text style={s.title1}>{item.title}</Text>
              <Text>
                <Text style={s.title2}>{item.degree}</Text>
                <Text> &#183; </Text>
                <Text>
                  {item.studyField}
                </Text>
              </Text>
              <Text>
                <Text>
                  {item.startDate}
                </Text>
                <Text> - </Text>
                <Text>{item.endDate}</Text>
              </Text>
              {item.grade && (
                <Text>
                  <Text>{staticFields.educations.grade}</Text>
                  <Text>{item.grade}</Text>
                </Text>
              )}
              {item.activities && (
                <>
                  <Text>
                    {staticFields.educations.activities}
                  </Text>
                  <Text>{item.activities}</Text>
                </>
              )}
              {item.description && (
                <>
                  <Text>Description: </Text>
                  <Text>
                    {item.description}
                  </Text>
                </>
              )}
            </View>
          ))}

        </View>

        <View style={s.section}>
          <Text style={s.heading}>{staticFields.additional.header}</Text>
          <View style={s.divider}></View>

          {currentCv.additional.map((item, index) => (
            <View style={s.article} key={index}>
              <Text style={s.title1}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document >
  }
}

class ResumeViewer extends React.Component {
  render() {
    const { BoxStyled, IconButtonStyled } = pdfStyles;
    const mdBreakpoint = mainTheme.breakpoints.values.md;

    return (
      <BoxStyled>
        {this.props.state.secondary.pdfPreview &&
          <>
            <IconButtonStyled onClick={this.props.preview().pdf}>
              <CloseOutlinedIcon />
            </IconButtonStyled>

            <PDFViewer style={s.viewer}>
              <PdfResume state={this.props} />
            </PDFViewer>
          </>
        }
      </BoxStyled>
    );
  }
}

export default ResumeViewer;
