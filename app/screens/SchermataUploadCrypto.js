import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colori from "../config/colori";

function SchermataUploadCrypto ({ gestisciFineAnimazione, progresso = 0, visibile = false }) {

  return (

      <Modal visible = {visibile}>
          <View style={styles.container}>
              {progresso < 1 ? (
                  <Progress.Bar color = {colori.primario} progress = {progresso} width = {200} />
              ) : (
                  <LottieView autoPlay loop = {false} onAnimationFinish = {gestisciFineAnimazione} source = {require ("../assets/animations/upload.json")} style = {styles.animation} />
              )}
          </View>
      </Modal>

  );

}

const styles = StyleSheet.create ({

    animation: {

        width: 150

    },
    container: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    }

});

export default SchermataUploadCrypto;