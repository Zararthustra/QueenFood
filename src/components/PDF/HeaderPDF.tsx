import { Image, Styles, Text, View } from '@react-pdf/renderer';

import { background } from '@assets/index';
import { IFormulesForm } from '@interfaces/index';

interface IHeaderPDFProps {
  styles: Styles;
  form: IFormulesForm;
  patient: {
    firstname: string;
    lastname: string;
  };
}

export const HeaderPDF = ({ styles, form, patient }: IHeaderPDFProps) => {
  return (
    <>
      {!!background && (
        <Image
          src={background}
          style={{
            width: '100%',
            height: '360px',
            position: 'absolute',
            objectFit: 'cover'
          }}
        />
      )}
      <View
        style={{
          fontSize: '32px',
          fontWeight: 800,
          marginTop: '40px',
          marginHorizontal: '45px',
          alignSelf: 'flex-end',
          display: 'flex',
          alignItems: 'center',
          color: '#2f424b'
        }}>
        <Text>Rapport</Text>
        <Text>Nutritionnel</Text>
      </View>

      {/* Labels */}
      <View
        style={{
          width: '150px',
          marginBottom: '40px',
          marginHorizontal: '74px',
          alignSelf: 'flex-end'
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginVertical: '40px'
          }}>
          <View
            style={{
              width: '100px',
              height: '1px',
              backgroundColor: '#a5c8d4'
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '5px',
              fontWeight: 600
            }}>
            <Text style={styles.textInfo}>{patient.firstname}</Text>
            <Text style={styles.textInfo}>{patient.lastname}</Text>
          </View>
          <View
            style={{
              width: '100px',
              height: '1px',
              backgroundColor: '#a5c8d4'
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Âge :</Text>
          <Text style={styles.textInfo}>{form.age} ans</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Poids :</Text>
          <Text style={styles.textInfo}>{form.weight} kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Taille :</Text>
          <Text style={styles.textInfo}>{form.height} cm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tour de taille :</Text>
          <Text style={styles.textInfo}>{form.hip} cm</Text>
        </View>
      </View>
    </>
  );
};
