import { Styles, Text, View } from '@react-pdf/renderer';

interface IIMCTableProps {
  styles: Styles;
  IMC: number;
}

export const IMCTable = ({ styles, IMC }: IIMCTableProps) => {
  const highlightOnThreshold = (low: number, high: number) => {
    if (!IMC) return {};
    if (IMC >= low && IMC < high) return { color: '#ff218c', fontWeight: 800 };
    return {};
  };

  return (
    <View>
      <Text style={styles.h3}>Indice de Masse Corporelle</Text>
      <Text style={[styles.label, { color: '#ff218c', fontWeight: 800 }]}>
        Résultat: {IMC.toFixed(1)}
      </Text>

      <View style={{ width: '270px' }}>
        {/* Head */}
        <View style={styles.row}>
          <Text style={styles.description3Col}></Text>
          <Text style={[styles.value3Col, styles.label]}>IMC</Text>
          <Text style={[styles.value3Col, styles.label]}>Risque</Text>
        </View>
        {/* Body */}
        <View style={[styles.row, styles.text]}>
          <Text style={[styles.description3Col, highlightOnThreshold(0, 16.5)]}>
            Maigreur extrême
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(0, 16.5)]}>
            {'x < 16.5'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(0, 16.5)]}>
            Elevé
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text
            style={[styles.description3Col, highlightOnThreshold(16.5, 18.5)]}>
            Maigreur
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(16.5, 18.5)]}>
            {'16.5 ≥ x < 18.5'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(16.5, 18.5)]}>
            Accru
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text
            style={[styles.description3Col, highlightOnThreshold(18.5, 25)]}>
            Corpulence normale
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(18.5, 25)]}>
            {'18.5 ≥ x < 25'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(18.5, 25)]}>
            Faible
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={[styles.description3Col, highlightOnThreshold(25, 30)]}>
            Surpoids
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(25, 30)]}>
            {'25 ≥ x < 30'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(25, 30)]}>
            Accru
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={[styles.description3Col, highlightOnThreshold(30, 35)]}>
            Obésité modérée
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(30, 35)]}>
            {'30 ≥ x < 35'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(30, 35)]}>
            élevé
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={[styles.description3Col, highlightOnThreshold(35, 40)]}>
            Obésité sévère
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(35, 40)]}>
            {'35 ≥ x < 40'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(35, 40)]}>
            Très Elevé
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={[styles.description3Col, highlightOnThreshold(40, 999)]}>
            Obésité morbide
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(40, 999)]}>
            {'40 < x'}
          </Text>
          <Text style={[styles.value3Col, highlightOnThreshold(40, 999)]}>
            Extrêmement élevé
          </Text>
        </View>

        <Text style={styles.source}>
          * Classification selon l’OMS et l’International Obesity Task Force
          (1998)
        </Text>
      </View>
    </View>
  );
};
