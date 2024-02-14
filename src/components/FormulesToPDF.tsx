import {
  Document,
  Font,
  Image,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';

import { IconError, IconPDF } from '@assets/index';
import {
  Button,
  HeaderPDF,
  IMATable,
  IMCTable,
  IMGTable
} from '@components/index';
import { IMCGAChartImage, MBChartImage, MNChartImage } from '@data/index';
import { IFormulesForm } from '@interfaces/index';

interface IFormulesToPDFProps {
  form: IFormulesForm;
  patient: {
    firstname: string;
    lastname: string;
    age: number;
  };
  data: {
    IMC: number;
    IMG: number;
    IMA: number;
    MBs: { value: number; name: string }[];
    selectedMB: { value: number; name: string };
    selectedObjective: string;
  };
}

export const FormulesToPDF = ({ form, patient, data }: IFormulesToPDFProps) => {
  const MBPercentage = (percent: number) =>
    (percent * data.selectedMB.value) / 100;

  const handleMBPercentages = () => {
    // return [Glucides, Protéines, Lipides]
    switch (data.selectedObjective) {
      case 'Prise de poids':
        return [MBPercentage(60), MBPercentage(25), MBPercentage(15)];
      case 'Maintien':
        return [MBPercentage(55), MBPercentage(30), MBPercentage(15)];
      case 'Perte de poids':
        return [MBPercentage(50), MBPercentage(30), MBPercentage(20)];
      case 'Sèche':
        return [MBPercentage(40), MBPercentage(40), MBPercentage(20)];

      default:
        return [0, 0, 0];
    }
  };

  // ==================================== Styles ====================================
  Font.register({
    family: 'Open Sans',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
        fontWeight: 600
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf',
        fontWeight: 800
      }
    ]
  });
  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      fontFamily: 'Open Sans'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 800,
      marginBottom: '20px',
      marginTop: '10px'
    },
    h3: {
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '5px'
    },
    corpus: {
      fontSize: '11px',
      textAlign: 'justify'
    },
    text: {
      fontSize: '12px'
    },
    textInfo: {
      fontSize: '14px'
    },
    label: {
      fontSize: '11px',
      fontWeight: 600,
      color: '#2f424b'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    description3Col: {
      width: '40%',
      fontSize: '10px',
      color: '#5d6370'
    },
    value3Col: {
      width: '30%',
      textAlign: 'center',
      fontSize: '9px',
      color: '#5d6370'
    },
    description4Col: {
      width: '25%',
      fontSize: '9px',
      color: '#5d6370'
    },
    value4Col: {
      width: '25%',
      textAlign: 'center',
      fontSize: '8px',
      color: '#5d6370'
    },
    source: {
      fontSize: '6px',
      marginTop: '5px',
      color: '#7b8695',
      width: '270px'
    }
  });

  const FormulesPDF = () => (
    <Document
      title={
        'Rapport nutritionnel de ' +
        (form.gender === 'male' ? 'M. ' : 'Mme ') +
        patient.firstname +
        ' ' +
        patient.lastname
      }
      subject={
        'Rapport nutritionnel de ' +
        (form.gender === 'male' ? 'M. ' : 'Mme ') +
        patient.firstname +
        ' ' +
        patient.lastname
      }
      author="Queen Food"
      creator="Queen Food"
      language="fr">
      <Page size="A4" orientation="portrait" style={styles.page}>
        {/* Header */}
        <HeaderPDF styles={styles} form={form} patient={patient} />
      </Page>

      <Page size="A4" orientation="portrait" style={styles.page}>
        {/* Indices */}
        <View {...{ bookmark: 'Indices' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px'
            }}>
            <Text style={styles.h2}>Indices</Text>
            <View
              style={{
                width: '450px',
                height: '1px',
                backgroundColor: '#17919A'
              }}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <View
              style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <IMCTable styles={styles} IMC={data.IMC} />
              <Image
                src={IMCGAChartImage(data.IMC, data.IMG, data.IMA)}
                style={{ width: '270px' }}
              />
            </View>

            <View
              style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <IMATable
                styles={styles}
                gender={form.gender as 'male' | 'female'}
                IMA={data.IMA}
                age={form.age as number}
              />
              <IMGTable
                styles={styles}
                gender={form.gender as 'male' | 'female'}
                IMG={data.IMG}
              />
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" orientation="portrait" style={styles.page}>
        {/* Métabolisme */}
        <View {...{ bookmark: 'Métabolisme' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px'
            }}>
            <Text style={styles.h2}>Métabolisme</Text>
            <View
              style={{
                width: '380px',
                height: '1px',
                backgroundColor: '#17919A'
              }}
            />
          </View>
        </View>

        {/* Métabolisme Basal */}
        <View style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={styles.h3}>Métabolisme Basal</Text>
            <View style={{ width: '190px', marginVertical: '5px' }}>
              {data.MBs.map((mb, index) => (
                <View key={index} style={styles.row}>
                  <Text
                    style={[
                      styles.label,
                      {
                        fontWeight:
                          mb.name === data.selectedMB.name ? 800 : 600,
                        color:
                          mb.name === data.selectedMB.name
                            ? '#17919A'
                            : '#2f424b'
                      }
                    ]}>
                    {mb.name} :
                  </Text>
                  <Text
                    style={[
                      styles.corpus,
                      {
                        fontWeight:
                          mb.name === data.selectedMB.name ? 800 : 600,
                        color:
                          mb.name === data.selectedMB.name
                            ? '#17919A'
                            : '#2f424b'
                      }
                    ]}>
                    {mb.value.toFixed(1)} Kcal
                  </Text>
                </View>
              ))}
            </View>
            <Image src={MBChartImage(data.MBs)} style={{ width: '270px' }} />
            {patient.age > 60 ? (
              <Text style={styles.source}>
                * + de 60ans & surpoids: Black, A.E., Coward, W.A., Cole, T.J.
                and Prentice, A.M. (1996) Human energy expenditure in affluent
                societies: An analysis of 574 doubly-labeled water measurements.
                European Journal of Clinical Nutrition, 50, 72-92
              </Text>
            ) : (
              <Text style={styles.source}>
                * A M Roza, H M Shizgal, The Harris Benedict equation
                reevaluated: resting energy requirements and the body cell mass,
                The American Journal of Clinical Nutrition, Volume 40, Issue 1,
                1984.
              </Text>
            )}
          </View>

          {/* Ratios macro-nutritionnels */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '270px'
            }}>
            <Text style={styles.h3}>Ratios macro-nutritionnels</Text>
            <Text style={styles.corpus}>
              Voici l'apport calorique journalier conseillé dans le cadre d'un
              métabolisme{' '}
              <Text style={{ fontWeight: 600, color: '#17919A' }}>
                {data.selectedMB.name.toLowerCase()}
              </Text>{' '}
              avec un objectif de{' '}
              <Text style={{ fontWeight: 600, color: '#17919A' }}>
                {data.selectedObjective.toLowerCase()}
              </Text>
              :
            </Text>
            <View style={{ width: '130px', marginVertical: '5px' }}>
              <View style={styles.row}>
                <Text style={styles.label}>Glucides :</Text>
                <Text style={styles.corpus}>
                  {handleMBPercentages()[0].toFixed(1)} Kcal
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Protéines :</Text>
                <Text style={styles.corpus}>
                  {handleMBPercentages()[1].toFixed(1)} Kcal
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Lipides :</Text>
                <Text style={styles.corpus}>
                  {handleMBPercentages()[2].toFixed(1)} Kcal
                </Text>
              </View>
            </View>
            <Image src={MNChartImage(data.selectedMB.value)} />
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="">
      <PDFDownloadLink
        document={<FormulesPDF />}
        fileName={'RN_' + patient.firstname + patient.lastname + '.pdf'}>
        {({ error, loading }) => (
          <>
            {error ? (
              <div className="bubble bubble--error mt-2">
                <IconError className="shrink-0" />
                <p>Une erreur est survenue lors de la génération du PDF</p>
              </div>
            ) : (
              <Button
                primary
                loading={loading}
                className="mt-2 w-full"
                disabled={
                  !patient.firstname ||
                  !patient.lastname ||
                  !data.selectedObjective ||
                  !data.selectedMB.value
                }>
                <IconPDF />
                <p>Télécharger le Rapport</p>
              </Button>
            )}
          </>
        )}
      </PDFDownloadLink>
    </div>
  );
};
