import { Styles, Text, View } from "@react-pdf/renderer";

interface IIMGTableProps {
  styles: Styles;
  IMG: number;
  gender: "male" | "female";
}

export const IMGTable = ({ styles, IMG, gender }: IIMGTableProps) => {
  const highlightOnThreshold = (low: number, high: number) => {
    if (!!!IMG) return {};
    if (IMG >= low && IMG < high) return { color: "#ffd800", fontWeight: 800 };
    return {};
  };

  return (
    <View>
      <Text style={styles.h3}>Indice de Masse Graisseuse</Text>
      <Text style={[styles.label, { color: "#ffd800", fontWeight: 800 }]}>
        Résultat: {IMG.toFixed(1)}
      </Text>

      <View style={{ width: "270px" }}>
        {/* Head */}
        <View style={styles.row}>
          <Text style={styles.description3Col}></Text>
          <Text style={[styles.value3Col, styles.label]}>Hommes</Text>
          <Text style={[styles.value3Col, styles.label]}>Femmes</Text>
        </View>
        {/* Body */}
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description3Col,
              highlightOnThreshold(0, gender === "male" ? 15 : 25),
            ]}
          >
            Trop maigre
          </Text>
          <Text
            style={[
              styles.value3Col,
              gender === "male" ? highlightOnThreshold(0, 15) : {},
            ]}
          >
            {"x < 15%"}
          </Text>
          <Text
            style={[
              styles.value3Col,
              gender === "female" ? highlightOnThreshold(0, 25) : {},
            ]}
          >
            {"x < 25%"}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description3Col,
              highlightOnThreshold(
                gender === "male" ? 15 : 25,
                gender === "male" ? 20 : 30,
              ),
            ]}
          >
            Pourcentage normal
          </Text>
          <Text
            style={[
              styles.value3Col,
              gender === "male" ? highlightOnThreshold(15, 20) : {},
            ]}
          >
            {"15% ≥ x ≤ 20%"}
          </Text>
          <Text
            style={[
              styles.value3Col,
              gender === "female" ? highlightOnThreshold(25, 30) : {},
            ]}
          >
            {"25% ≥ x ≤ 30%"}
          </Text>
        </View>
        <View style={[styles.row, styles.text]}>
          <Text
            style={[
              styles.description3Col,
              highlightOnThreshold(gender === "male" ? 20 : 30, 999),
            ]}
          >
            Trop de graisse
          </Text>
          <Text
            style={[
              styles.value3Col,
              gender === "male" ? highlightOnThreshold(20, 999) : {},
            ]}
          >
            {"20 < x"}
          </Text>
          <Text
            style={[
              styles.value3Col,
              gender === "female" ? highlightOnThreshold(30, 999) : {},
            ]}
          >
            {"30 < x"}
          </Text>
        </View>
        <Text style={styles.source}>
          * Body mass index as a measure of body fatness: age- and sex-specific
          prediction formulas. Deurenberg P1, Weststrate JA, Seidell JC. Br J
          Nutr. 1991 Mar;65(2):105-14. PMID 2043597
        </Text>
      </View>
    </View>
  );
};
