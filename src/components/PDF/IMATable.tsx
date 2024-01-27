import { Styles, Text, View } from '@react-pdf/renderer';

interface IIMATableProps {
  styles: Styles;
  IMA: number;
  age: number;
  gender: 'male' | 'female';
}

export const IMATable = ({ styles, IMA, gender, age }: IIMATableProps) => {
  const highlightOnThreshold = (
    low: number,
    high: number,
    ageMin: number,
    ageMax: number
  ) => {
    if (!IMA) return {};
    if (IMA >= low && IMA < high && ageMin <= age && age <= ageMax)
      return { color: '#21b1ff', fontWeight: 800 };
    return {};
  };

  return (
    <View>
      <Text style={styles.h3}>Indice de Masse Adipeuse</Text>
      <Text style={[styles.label, { color: '#21b1ff', fontWeight: 800 }]}>
        Résultat: {IMA.toFixed(1)}
      </Text>

      <View style={{ width: '270px' }}>
        {/* Head */}
        <View style={styles.row}>
          <Text style={styles.description4Col}></Text>
          <Text style={[styles.value4Col, styles.label]}>Âge</Text>
          <Text style={[styles.value4Col, styles.label]}>Hommes</Text>
          <Text style={[styles.value4Col, styles.label]}>Femmes</Text>
        </View>
        {/* Body */}
        {/* Maigre */}
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description4Col,
              highlightOnThreshold(0, gender === 'male' ? 8 : 21, 20, 40) ||
                highlightOnThreshold(0, gender === 'male' ? 11 : 23, 41, 60) ||
                highlightOnThreshold(0, gender === 'male' ? 13 : 24, 61, 79)
            ]}>
            Maigre
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'male' ? 8 : 21, 20, 40)
            ]}>
            {'20 ≥ x ≤ 40'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'male' ? 8 : 0, 20, 40)
            ]}>
            {'x < 8%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'female' ? 21 : 0, 20, 40)
            ]}>
            {'x < 21%'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'male' ? 11 : 23, 41, 60)
            ]}>
            {'41 ≥ x ≤ 60'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'male' ? 11 : 0, 41, 60)
            ]}>
            {'x < 11%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'female' ? 23 : 0, 41, 60)
            ]}>
            {'x < 23%'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'male' ? 13 : 24, 61, 79)
            ]}>
            {'61 ≥ x ≤ 79'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'male' ? 13 : 0, 61, 79)
            ]}>
            {'x < 13%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(0, gender === 'female' ? 24 : 0, 61, 79)
            ]}>
            {'x < 24%'}
          </Text>
        </View>

        {/* En bonne santé */}
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description4Col,
              highlightOnThreshold(
                gender === 'male' ? 8 : 21,
                gender === 'male' ? 19 : 33,
                20,
                40
              ) ||
                highlightOnThreshold(
                  gender === 'male' ? 11 : 23,
                  gender === 'male' ? 22 : 35,
                  41,
                  60
                ) ||
                highlightOnThreshold(
                  gender === 'male' ? 13 : 24,
                  gender === 'male' ? 25 : 36,
                  61,
                  79
                )
            ]}>
            En bonne santé
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 8 : 21,
                gender === 'male' ? 19 : 33,
                20,
                40
              )
            ]}>
            {'20 ≥ x ≤ 40'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 8 : 0,
                gender === 'male' ? 19 : 0,
                20,
                40
              )
            ]}>
            {'8% ≥ x < 19%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'female' ? 21 : 0,
                gender === 'female' ? 33 : 0,
                20,
                40
              )
            ]}>
            {'21% ≥ x < 33%'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 11 : 23,
                gender === 'male' ? 22 : 35,
                41,
                60
              )
            ]}>
            {'41 ≥ x ≤ 60'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 11 : 0,
                gender === 'male' ? 22 : 0,
                41,
                60
              )
            ]}>
            {'11% ≥ x < 22%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'female' ? 23 : 0,
                gender === 'female' ? 35 : 0,
                41,
                60
              )
            ]}>
            {'23% ≥ x < 35%'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 13 : 24,
                gender === 'male' ? 25 : 36,
                61,
                79
              )
            ]}>
            {'61 ≥ x ≤ 79'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 13 : 0,
                gender === 'male' ? 25 : 0,
                61,
                79
              )
            ]}>
            {'13% ≥ x < 25%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'female' ? 24 : 0,
                gender === 'female' ? 36 : 0,
                61,
                79
              )
            ]}>
            {'24% ≥ x < 36%'}
          </Text>
        </View>

        {/* En surpoids */}
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description4Col,
              highlightOnThreshold(
                gender === 'male' ? 19 : 33,
                gender === 'male' ? 25 : 39,
                20,
                40
              ) ||
                highlightOnThreshold(
                  gender === 'male' ? 22 : 35,
                  gender === 'male' ? 27 : 40,
                  41,
                  60
                ) ||
                highlightOnThreshold(
                  gender === 'male' ? 25 : 36,
                  gender === 'male' ? 30 : 42,
                  61,
                  79
                )
            ]}>
            En surpoids
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 19 : 33,
                gender === 'male' ? 25 : 39,
                20,
                40
              )
            ]}>
            {'20 ≥ x ≤ 40'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 19 : 0,
                gender === 'male' ? 25 : 0,
                20,
                40
              )
            ]}>
            {'19% ≥ x ≤ 25%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'female' ? 33 : 0,
                gender === 'female' ? 39 : 0,
                20,
                40
              )
            ]}>
            {'33% ≥ x ≤ 39%'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 22 : 35,
                gender === 'male' ? 27 : 40,
                41,
                60
              )
            ]}>
            {'41 ≥ x ≤ 60'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 22 : 0,
                gender === 'male' ? 27 : 0,
                41,
                60
              )
            ]}>
            {'22% ≥ x ≤ 27%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'female' ? 35 : 0,
                gender === 'female' ? 40 : 0,
                41,
                60
              )
            ]}>
            {'35% ≥ x ≤ 40%'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 25 : 36,
                gender === 'male' ? 30 : 42,
                61,
                79
              )
            ]}>
            {'61 ≥ x ≤ 79'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'male' ? 25 : 0,
                gender === 'male' ? 30 : 0,
                61,
                79
              )
            ]}>
            {'25% ≥ x ≤ 30%'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(
                gender === 'female' ? 36 : 0,
                gender === 'female' ? 42 : 0,
                61,
                79
              )
            ]}>
            {'36% ≥ x ≤ 42%'}
          </Text>
        </View>

        {/* Obèse */}
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description4Col,
              highlightOnThreshold(gender === 'male' ? 25 : 39, 999, 20, 40) ||
                highlightOnThreshold(
                  gender === 'male' ? 27 : 40,
                  999,
                  41,
                  60
                ) ||
                highlightOnThreshold(gender === 'male' ? 30 : 42, 999, 61, 79)
            ]}>
            Obèse
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'male' ? 25 : 39, 999, 20, 40)
            ]}>
            {'20 ≥ x ≤ 40'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'male' ? 25 : 999, 999, 20, 40)
            ]}>
            {'25% < x'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'female' ? 39 : 999, 999, 20, 40)
            ]}>
            {'39% < x'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'male' ? 27 : 40, 999, 41, 60)
            ]}>
            {'41 ≥ x ≤ 60'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'male' ? 27 : 999, 999, 41, 60)
            ]}>
            {'27% < x'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'female' ? 40 : 999, 999, 41, 60)
            ]}>
            {'40% < x'}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text style={styles.description4Col}></Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'male' ? 30 : 42, 999, 61, 79)
            ]}>
            {'61 ≥ x ≤ 79'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'male' ? 30 : 999, 999, 61, 79)
            ]}>
            {'30% < x'}
          </Text>
          <Text
            style={[
              styles.value4Col,
              highlightOnThreshold(gender === 'female' ? 42 : 999, 999, 61, 79)
            ]}>
            {'42% < x'}
          </Text>
        </View>

        <Text style={styles.source}>
          * A better index of body adiposity. Bergman RN1, Stefanovski D,
          Buchanan TA, Sumner AE, Reynolds JC, Sebring NG, Xiang AH, Watanabe
          RM. Obesity (Silver Spring). 2011 May;19(5):1083-9. doi:
          10.1038/oby.2011.38. Epub 2011 Mar 3 - PMID 21372804
        </Text>
      </View>
    </View>
  );
};
