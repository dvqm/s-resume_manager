import { Page, Text, View, Link, Image, Document } from '@react-pdf/renderer';
import { s } from './PdfStyles';
import { titles } from '../../state/templates';

const PdfResume = ({ resume }) => {
  const stringToNull = (obj) => {
    if (obj === undefined) return <> </>;

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

  const nulledResume = stringToNull(resume);

  return <Document>
    <Page size="A4" style={s.container}>
      <View style={s.section}>
        <Text style={s.heading}>{titles.about.header}</Text>
        <View style={s.divider}></View>
        <View style={s.flexRow}>
          {nulledResume.about.photo ? <Image style={s.photo} src={nulledResume.about.photo} /> : null}
          <View style={s.viewMainInfo}>

            <View style={s.flexRow}>
              <View>
                <Text>
                  {nulledResume.about.first && `${nulledResume.about.first} `}
                  {nulledResume.about.middle && `${nulledResume.about.middle} `}
                  {nulledResume.about.last}
                </Text>
                <Text>{nulledResume.about.position}</Text>
                <Text>
                  {nulledResume.about.city && `${nulledResume.about.city}, `}
                  {nulledResume.about.state && `${nulledResume.about.state}, `}
                  {nulledResume.about.country}
                </Text>
              </View>
              <View>
                <Link src={`tel:${nulledResume.about.tel}`}>
                  {nulledResume.about.tel}
                </Link>
                <Link src={`mailto:${nulledResume.about.email}`}>
                  {nulledResume.about.email}
                </Link>
                <Link src={nulledResume.about.linkedin}>
                  {nulledResume.about.linkedin}
                </Link>
                <Link src={nulledResume.about.gitHub}>
                  {nulledResume.about.gitHub}
                </Link>
              </View>
            </View>
          </View>
        </View>

      </View>

      <View style={s.section}>
        <Text style={s.heading}>{titles.summary.header}</Text>
        <View style={s.divider}></View>
        <Text>{nulledResume.summary.summary}</Text>
      </View>

      <View style={s.section}>
        <Text style={s.heading}>{titles.expertise.header}</Text>
        <View style={s.divider}></View>
        <View>
          {nulledResume.expertise.map((item, index) => (
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
        <Text style={s.heading}>{titles.projects.header}</Text>
        <View style={s.divider}></View>

        {nulledResume.projects.map((item, index) => (
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
                    ? titles.projects.currentlyWork
                    : item.endDate}
                </Text>
              </View>
            ) : (
              null
            )}

            {item.technologies && (
              <View style={s.flexRow}>
                <Text style={s.title2}>
                  {titles.projects.technologies}
                </Text>

                <Text>
                  {item.technologies}
                </Text>
              </View>
            )}

            <View>
              <Text style={s.title2}>
                {titles.projects.description}
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
                  >{titles.projects.deployUrl}</Link>
                ) : (
                  null
                )}

                {item.sourceUrl ? (
                  <Link
                    src={item.sourceUrl}
                  > {titles.projects.sourceUrl}</Link>
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
        <Text style={s.heading}>{titles.experiences.header}</Text>
        <View style={s.divider}></View>
        {nulledResume.experiences.map((item, index) => (
          <View style={s.article} key={index}>
            <Text style={s.title1}>{item.title} at {item.company}</Text>

            <View style={s.flexRow}>
              <View style={s.flexRow}>
                <Text>
                  {titles.experiences.employmentType}
                </Text>
                <Text>
                  {item.employmentType}
                </Text>
              </View>

              <View style={s.flexRow}>
                <Text>
                  {titles.experiences.contractType}
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
                  {titles.experiences.location}
                </Text>
                <Text>
                  {item.location}
                </Text>
              </View>
            )}

            <View>
              <Text>
                {titles.experiences.description}
              </Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={s.section}>
        <Text style={s.heading}>{titles.educations.header}</Text>
        <View style={s.divider}></View>

        {nulledResume.educations.map((item, index) => (
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
                <Text>{titles.educations.grade}</Text>
                <Text>{item.grade}</Text>
              </Text>
            )}
            {item.activities && (
              <>
                <Text>
                  {titles.educations.activities}
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
        <Text style={s.heading}>{titles.additional.header}</Text>
        <View style={s.divider}></View>

        {nulledResume.additional.map((item, index) => (
          <View style={s.article} key={index}>
            <Text style={s.title1}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document >
}

export default PdfResume;
