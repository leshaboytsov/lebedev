<template>
  <div class="videoPlyr">
    <div id="player"></div>
    <p>Баннер 300x250</p>
    <div class="app" style="width: 300px; height: 250px"></div> <!-- Баннер -->
    <p>Баннер 300x600</p>
    <div class="app" style="width: 300px; height: 600px"></div>
    <p>Баннер 728x90</p>
    <div class="app" style="width: 728px; height: 90px"></div>
    <p>Баннер 240x400</p>
    <div class="app" style="width: 240px; height: 400px"></div>
    <p>Баннер 328x420</p>
    <div class="app" style="width: 328px; height: 420px"></div>
    <p>Баннер 420x328</p>
    <div class="app" style="width: 420px; height: 328px"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) { // Проверка на наличие объекта document
      this.initPlayer();
      this.initBanner();
    }
  },

  methods: {
    // Инициализация плеера
    initPlayer() {
      const script = document.createElement("script");
      script.async = true;
      script.src = "/playerjs.js"; // Путь к вашему файлу playerjs.js в папке static
      document.head.appendChild(script);

      script.onload = () => {
        this.initPlayerjs();
      };
    },
    initPlayerjs() {
      let player = new Playerjs({
        id: "player",
        file: "https://lebedevnovosti.ru/api/film/Test/Video/1.mp4", // Замените на ссылку на ваше видео
      });
    },

    // Инициализация баннера
    initBanner() {
      const bannerScript = document.createElement('script');
      bannerScript.src = "https://cdn.bidster.net/banner/dist/tag.js";
      document.body.appendChild(bannerScript);

      const StickerScript = document.createElement('script');
      StickerScript.src = "https://cdn.bidster.net/banner/dist/sticker.js";
      document.body.appendChild(StickerScript);

      StickerScript.onload = () => {
        bidster.init('03430b06-a247-4981-b199-c41ccdd3bc44', {
          // parentSelector: '.app',
          sticker: true,
          // refreshRateMs: 10000,
          onLoad: (elem) => {
            console.log('success');
            console.log(elem.type);
          },
          onClick: () => {
            console.log('clicked');
          },
        });

        bidster.on('error', () => {
          console.log('error');
          setTimeout(() => {
            const e = document.createElement('div')
            e.id='randomId'
            e.style.zIndex = '2147483647'
            e.style.width = '700px'
            e.style.height = '700px'
            e.style['right'] = '10px'
            e.style['bottom'] = '10px'
            e.style.position = 'fixed'
            e.style.background = 'red'
            document.body.appendChild(e);
          }, 3000)
        });

        bidster.on('load', (elem) => {
          console.log('load');
          console.log(elem.id)
        });
      };
    },
  },
};
</script>

<style scoped>
.videoPlyr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app {
  margin-top: 20px;
}
</style>



<?xml version='1.0' encoding='UTF-8'?>
<VAST xmlns:xsi='https://www.w3.org/2001/XMLSchema-instance' version='3.0'>
<Ad id='1847-1' sequence='1'>
  <Wrapper allowMultipleAds='true' followAdditonalWrappers='true'>
    <AdSystem>UnionTraff</AdSystem>
    <Impression><![CDATA[https://a.utraff.com/tr/v7?ev=FUZPwiYgOAN0qyNmqyyaBIRhqhZ7RcyDHaizEf4Gd_R6aq5Svr42R47Tm95Zr_H7BHhclgMmoVf3Ok2gzsSfxHiH_3addMxDwHudEVE3-b0n9ku4FGAil-4ZYtkM_gzONOaFX_a1T5widJuImc-aVvw0jwVe-6dhx7EBKaLfIEco1YISJRn2evT_Y8mFGGJ0bwDJsbTlu8hU7k_8jQTxHJtN-T2WqbITXZNVsXS437tpJWqapojPa2gPMAX3Pq1d84KN8AypBq5KgVP9ddSmncD4yB7U3Gg5exr4XeAdHXLQ6eKpllpC9LXAe52F_zE6BP8XoltQ1w95R8M-a_IXUox0ktQ8u0krhUH-a8IJl-c&v=(visibility)]]></Impression>
    <VASTAdTagURI><![CDATA[https://a.utraff.com/wrapper/v6?pl=FIzy0rmTKoMacy20qAd4oXlzkyY4kyHPtdjU1PKySxHxl0f6ICxlEbitt6KOzE40WpF-i5nWSGwJbI1eZyeI1pSNCSNjCNyzRXKY9PHj1VIB3IRuxPCEBfNQbwvNqyeiGM_lJJxkfR6XM6VwJU8dYYBMp-eXfzxaDMWARF5TfDV004agL2umCuTj_G-lhfCvlGps05J3IPQje7S_IEhTigMcKyiUVFTPhXbVj7gciQ5-TX_e-L8UEicZXB-2hvjvWCV4Ue7O-xsUtQsx4GmA00Qh2QyI0gzXMMHZ6oIOD9fZAnBJYMne6dYPI0oDprx2LZKBzgR-D3v4_iixKInryYwJcR7XKulMNenJPkGmvlI&derr=1&be=2&t=4&pb=1&blk=0]]></VASTAdTagURI>
    <Error><![CDATA[https://a.utraff.com/tr/v7?ev=6MGXweAimBCMo2BgAF3u5uzJsBwHHyHDrmw_ukKWp6o-XqXegxljyJLEOiTvyDqQt1sugYCrvAcCTf73iWlIWYwDoS53V9VPqNXJaWpIxQ2RgGvzHvvTX2sqfzxLrkievvmkcLNpgyxyeh9Tk2fpnzsaCYu6WJ9c9OmbS8bZWvQEsXFdA-aA6FYGA6gBDPuXfXGpy50WKELAl4gKvOC_HPZsEPZhcDhef4UHi_20Z9-srzd9MuSNqU58UIZN2zCyHoNsFZA5rVDF-T78ZAQtPJvl505cOTq5lMWye3dJ4qK6fXe88RbJDzwAM5a1cdwaK0-zTGyI1EoW07LOCWbnZ8EmMqjnRb7kvsSzDWDuCng&ec=[ERRORCODE] ]]></Error>
    <Creatives>
      <Creative id='913' adId='1847-1'>
        <Linear>
          <TrackingEvents>
            <Tracking event='creativeView'><![CDATA[https://a.utraff.com/tr/v7?ev=AfPdt80SGckZmsekDj5MukUuDZ1mKlOEpFiFj5eiIcwEydDctMvmpfR3u5jMk5GVpkZPhjAQvWIZ8oJwNPcfzSixQSNJ2dy5XaDsmeAAo3FcWRjmbDbLSuwgsGQ57t32N8WS27oPDtChPdENNJg_XdWktQFsrclTCax-DtHQL1nGDlSmgycWO1g9v-pwtsV6r5KqWZy-RBiK7UHgdDYaXQsHyDc_7dJk1PlSBjCncmraLf_wp6RKc57QdwdBwAhaQfnXoXJsGiyQojvXqs4PhKg1IgIl6xC3_SaawWXyqg9nbwQZD2Oqlwg1WX2OBx8KvWpRDbRp24qtSeX2eigyRIyvwwxb4PWtEy-az6ro0K0]]></Tracking>
            <Tracking event='start'><![CDATA[https://a.utraff.com/tr/v7?ev=3m907JNJql-tXRgpHJHYrK_aqi93sjyrknT4i-AhRH7h1xFch0jtwEdELvHTbrroH2RWZ3lYop0gN7BStygJTY-Lkd7XSehCcRCM9YVlcF_yYlqFU4LKy2oHGav4CR387aI1dRnktkEME_6QA6GA2TvE4sOEy4Mqy1KEemSuqzeHQghRs6rNYgY9IG7RveZfmlimlNvUu4WHuux34E7M0ce2Hje47VdQowCBVyzDRyWp5NPgM1--aY99YVSiUIXwOVSZw3TL3K9k2HXZ3QUy3jcyYVhQ504sFJmUydIhOZz3LVSs9QcQA2B6iLbhJB1p_7h1HoueGQnQ3EvbSiCq1sKku9YFLGkZ_aGlNEqAVIk]]></Tracking>
            <Tracking event='firstQuartile'><![CDATA[https://a.utraff.com/tr/v7?ev=goEm2Ac5kVN-vSbny-20UUH6N1dTyNXw8YoaOFS5M09flOSzpF7HCvz8V71T9OOJk4KI7zJgmlh6CHadQVrPpt59kYCmFHPWYTagUA8SCg2y0bQ1tfmZBwdN_dBcE12Lu2KBMB0vQuQQOCfsF3j3PPAmVMQrN-3ZHUMgddCkYAi07V3nT1UuiVQ_1wxaiVUBdVSC6ypaE6CkiDSA6z61F9mES4TW7e-hxqTgaiHeOnGk576rIvyc-VIFvRvuBgcRJ3t4qbBlHPKTBCkixaCBOStI66WiaTpMvLkwIx4nDyR070fVUYIxbtsGnODZNNuQ8uMOFed5XU-5boCXkcRLpDr1OUfijrVrZk-dX7EObjQ]]></Tracking>
            <Tracking event='midpoint'><![CDATA[https://a.utraff.com/tr/v7?ev=UxzdMrHJHHoTSDeSf8m-NFv8lw-tH1ouTG9oNy_rnkk4ixWFaG3WLjWcCXzn8Z6og7IyMLSxqoavJ4jUdboCq83Lyaj_E7LD27CcWd_T4OxqBwRfcUS0tTtOG9GGo6L15LAuXwtCE-WBh3NmsKWd8iTKY-WLgvlTA0-CfNwkS0SomXOJLMvw18gkZDQRvox3ozBkzKMSTW-Zg6-P3q1SDt642nWy4MZtneKvGEnEmY8ERH5V3fr7W1XBYiwoZTaWKb2wQvfz9BvRpY6PDIxkYM80K_WdtonXAPJpnrdWNvlGneWtsx4zs_kTeRdPCpTDd2pDDtNpLsl0XjDW-57OvshobplzPCC-e7jPuQo9Bo4]]></Tracking>
            <Tracking event='thirdQuartile'><![CDATA[https://a.utraff.com/tr/v7?ev=QZgucJm53jXhrwbQNxCqlg6e_rlsrvhMA4M2ehQoRljew4UjXNjq03OGM25BUHJjrySragFFKbx8a1BgDYwLC2_SKXUokruD_HOi2lkGSOc4kM2TrkeM_lC0fx2h8Vq4LmXRiu9x_yjbdTnL5Cshm8bIV-9ggg-kO4SMUAZimP--U00xjlQnb2Ts-b21GAj00uQgFs05tJbAbrK7EA-6zcVffgaPv3Cg3tOFFuOYiWepyM0slZykGNHeCijmhMTrOuHV7n3ZX3H_h8i6ZAXg5gtm06top8TXvhY1TTgyfyB3qTZDch2yU0m2s9TlyktJg4wfBXnwViz7hAdPOFWsRsuCquiK-dDDLVXC-x9f0XU]]></Tracking>
            <Tracking event='complete'><![CDATA[https://a.utraff.com/tr/v7?ev=4mp64et1Hq2Av6mS1Ck_iCXRjVvO5MBMZzrvZ3YCfueDseobve2tX38CbCggpOZae8REtqBlP3eZG3M6ZgdhzzV4YbkHJ2e4NGvWJdAec4DT0e0cVBbszb5u8is0NdTRvFgYXOvLJs6e9Q74GmFYJLsEXrh21YIvwY_GgBVAL0fJbs8h-rQZ9G89rPcLwzENYDi5Irxn4uyEbWrfwkuzkyzQlH45pe0Pil-eoMZ5RXFKv4yUzgAq9Et25hVKirQDx91BE0xyZpBVVMgMEqRTo_s_4IA9zPU6Q2hAVn4Ic-r1gB22-NkpER1HLJ8jr4aNm4yPqq0pKdNTQRTyMd62HE1ttMiZuciacMpkqW0YBys]]></Tracking>
          </TrackingEvents>
          <VideoClicks>
            <ClickTracking><![CDATA[https://a.utraff.com/tr/v7?ev=pwJUnuJ4j3ZKdfKOf4tUMDy21aV-LXSdxjKkt-IXH586R7JT1eCcb_M4RRjXW7NhgZHgpvWErJLyYtFkX4FrDzwkJ4NTseHcqJyx3WgzJAFSELRWn5ZBZ8sQyIh9xlyHX7OzEq-WDf0nEpEc3RU9Nk7ADxNKc8J8M40W80KbnBPykOghcWo748MxEFNzwV8kxsN6qkBrc8S6n-gVQfLj-JvFujkxe91ndw8Z7ur5dEYhopFp7VoRvIZttDRjvs481FvJOAWJ_o7ci8vjPEYseN-aaHuEh3OPLOMphoOlbHal2xDdbfbd5rlZkJxuhY7sKeRH0zKtHuMFFsEDrigUuULCOy1Y8-xaaHUNIGDZDQ8]]></ClickTracking>
          </VideoClicks>
        </Linear>
      </Creative>
    </Creatives>
    <Extensions>
      <Extension type='second2'><![CDATA[https://a.utraff.com/tr/v7?ev=x7cW018-AfKFcOIChH81f2Iv74wo4jhARzwCRSsNSPV2rxDyG6hb99W53gtZCgwKWjw2ZQko99BdAKsMaZ7ld1ScDCwe0CnVW3xbTbSj43M3kbTA7edXnzvfITsQe0DM45cA8vsRW_LkZ01ITRH7v9U2zIDtc9PLA8bNidvxzj8MQnIocxnh-K-LWriE8ijj5BMoy7i53P35LlMTHMGSI49T7ikL1YAqnJAPwEn2Gpqf-5xcOdZOlh46Ri7Emzh-pvLAxPD3RKuuLOpDTnH-aWR0Tp0I8JEmYF5VaWOUy04FOz3HneRoC4UrB5-WNHYr5RYLzQnoCVpKViWOOKmOtjGQT7aR_gugROIoPpq9oaE&v=(visibility)&vl=(volume)]]></Extension>
      <Extension type='domain' domain='sdk.adx21.com' priority='3'/>
      <Extension type='errorAdvanced'/>
    </Extensions>
  </Wrapper>
</Ad>
</VAST>


<?xml version='1.0' encoding='UTF-8'?>
<VAST xmlns:xsi='https://www.w3.org/2001/XMLSchema-instance' version='3.0'>
<Ad id='481' sequence='1'>
  <InLine>
    <AdSystem>uDSP</AdSystem>
    <AdTitle>

    </AdTitle>
    <Impression><![CDATA[https://a.udsp.io/tr?ev=6yqXiibH6ecsP0yNZ6bhZmoVhcgFCd9oGaxOGRAovqA9GjggaFya3rKL3mFxsEgSUO4rIUdqu9GfjPxPm-SlUGZe2v7a4QNnZUv06hFiBQih5nJpez0WEf7jSkczilg8mrHnSVKr20mjDmGbeeg0LE6LoJR_jY9_X0xJ0MXaYUAa5HneqkQCIOGxKPpkpFDzm7ZWvtY03BgzMGlwZTR0DYj82QuK0UshBqsUwaJeWYgwJudvZZKSqzxKIKDk_uY8YPHymQEYOmQaqAKFrLo0F855LindsxsmhIo4_aRJOKgsziWZGOqvXSqa_twR_oxlqo6GOa-owcK2E_Ub0f8lFCYeyfmBT7xMdN42cBjJWVasUkmJ-E7H-S-oG79Q-aiK&ap=242.250000&v=(visibility)]]></Impression>
    <Creatives>
      <Creative id='913' adId='481'>
        <Linear skipoffset='00:00:09'>
          <Duration>00:00:15</Duration>
          <TrackingEvents>
            <Tracking event='creativeView'><![CDATA[https://a.udsp.io/tr?ev=NiVteK0OTVvokXkcq_ISd5jZWacSRAZyCNPQ48JQpiZYoCZMdmboFzts0Hdnqjs-tfM5ZUMkTtAG0Q4Bf0zxkSj8TBTqBLHkTFxRsy_IiYTtDniheARVYyEXwXp-2d-xuxb5REVcjIdac5BzxvQBmk8FsFLlD2Rrqbk2kKj1hnZYFPAqj2KySjtjGVzDjon7OmgRGqrSPndoHWtiEwNGRsZpelPDlI-0hT7XLq1Ai2ZoTzApGOh2QwGtGpkmb6-6K7EwteSDhV6tFezgADaRPSRDZR5MK3HwGnG5XWlaQdURrgds37DODs_8lWZGSKQBXrUyUNwPiq4zQiNEdtfmHzW1P4qYj9KlMxpF2EortVVtnoH659svH3rgt-KbHUjD]]></Tracking>
            <Tracking event='start'><![CDATA[https://a.udsp.io/tr?ev=IpkCGf9pE7OMxoejEY5ERYi4By3jPqfqexBm4jkeD1BslW52xV-iSP0u0paRvdFTNBTm8ZXZQRC-d7q0U9A60k7PCl0I-1QY0g1ENykOZqe1SzUp5bXDva4e-rqVKmP69LA82VTXVV_oDbna60_7lJKFef59GfgjWcmKv0Abe2VtEHortwH6Q_atviAbhkZZneMB96ZaD9VCdZSK_9QgWZZLb8sklChFl5c3dQtyLEBGIKDWN1zjLdm4iuJeH2WjkrcvT43snWUcm9nFqX6Io2EMiQKlIqiz-rM6_9EYTPmmmkeMfZVrn9ir-lGxsbJ6nRF-cY1I4HYBzLQ4GKO76v3nYkCaIPaF6SrUTbEIbalE1e7EqKAhAwgkvirVNjaS]]></Tracking><Tracking event='firstQuartile'><![CDATA[https://a.udsp.io/tr?ev=pY7X_ioevmfXr0rpOoiFOP40Mxj3s8EEngKckGebQ405E8wlqgpLnvRfqJ4TYLZlH_vKTHBMFdKxSCGH6v9X0Pj8swi8K7g9hCW-Tg3L0spUKsXUEdpfskBcMXof2JWzF-oueiKR2yd9ms8wl7BxQmQIPc-rKkGfBexGS_XBkOS6L-P7t0fmO2WcSI0hMCBlxvU8_U-_2yoyRiZz626nbBuSpun8qduom7cjGlC2gQOO5wFIFp_5Ql5kxH4Gz00FWnme2EYNIaPnuOxCs_0SP0ynHp-iofkvG3MMV5A7H887n4ImCqmoeiJ0eZ0e42B9hkV8EI-dC4_Q_JUaajYqyelHBH8k24JJZbelDoFZg6hm1re_rw_Fvmh6Uu1tFsot]]></Tracking><Tracking event='midpoint'><![CDATA[https://a.udsp.io/tr?ev=VdQCwrW7LBbatRL7qKHdtiRSWXgZEVQm6lzPtMW2dJ6oGIouDblNtyYiiEheUIbq72s1orVz0IyKtGPjQh1yAavLOpttJtEoyEjSNvmaH7WtDEtpskphf3pjQvRnNXP93ws_r28z2vYfBd4gEvgf3Zery_e3K0UErfVLMp5yR_f2KtZglrU5R22PFCIp8s5hBAOpTYieSAT1zfAJXIo_p9Ti-ARrIej2TLajbxvxZNEPiT2nY7ngAPROdMzfA_kYcWoW8I1u5B9NOODZzKwJuqla1ZnQ93HrNC3L7ejm8Qhe9wpcajogBc7o8KWLQYOk0gbWP_2omdY-DZ6S0j35TjnaSl7kV2YjI-av9RDVAUJLrm2yjnPwoV1BwqjO6eQi]]></Tracking><Tracking event='thirdQuartile'><![CDATA[https://a.udsp.io/tr?ev=O1HIZ8zKpPpsR1NeMBCqKzMAc9tkBii_LFSBu40Eb8Pa6dmZDW6gKgkc6rHQ_UuqfYJHBj0eHBA22rIEA0NC67C4vXdxgYv8hs5eDAoG-1Cq_xrGM7BxRJbM22obIdrCVBsXtnUO1qCtFqpDIrC35xfdVuuJoUvxYseAK8x3a-Q5SYQ0dzSoPeqABAGn-TFmG59tOJsM0DMEiUjg48e_F_HDO4zEw7DqT6c8NLX6zRCOGBT_nOhKENM4yhujdc3uR_JY2Y6huwPXAaoOIalqmhEevtaZ9PRzIRKl_KLE6onA3Gky5i6D0GqOo-4iZ1fD5OJC1yNaWcUlVDbuvVk5l4YRJOV_ku_u_v1dfBcHw1qhNtyK3INKZkgVarzi_Ctg]]></Tracking><Tracking event='complete'><![CDATA[https://a.udsp.io/tr?ev=OLJeeUd9jbOyYqoSmJKXOZGB9v0P81U_Vhn6aEj8PH4sf-4azyXbXbzKlem9tOYhjH2c3heVMNxS_ifDesHyslrwDfI5z9RB2wdZ37XlegT1Q9X9wZ5YEepfZFshuG3FmcxeG5_ydZ5T7j_kNmmLRcqhitjCsLLwdgzVAIxQsI6kMAi6DY-RhMQOLcpSEXpZGqKu6BI25BhoHNsvo1xn-RKEoIGleMn5u5DHAyhSv8NjuTXqb_2Wse6j1CS19R0KhcsgkA0zqv3I_m-2KuhY_ZMlIceXQaDkxg8xMwWfXgXTsfbx9mHmZHdt0867-bRqe9BqV_X4ONcRXS183Gd13yVJY7dLAdNQjKitSqSwkMFIZPjClO5tve_0W-xGHTKt]]></Tracking><Tracking event='mute'><![CDATA[https://a.udsp.io/tr?ev=UTLY55qF2hcj75DQdezjoU6tJ4hTSLx4lODdncDRqYhPO0ij6x1j8KroesM3EC_i4bIxDM6MZU_ETmDeDHrAx2pEAO5H96zXO-ODIZkNEV4XBT8JpT_21_ROmL01AOd8op-FfqB-5WBcfgTMq01WMhSK9N3e7lJ1rC5KINPziPbUDoY9ux35PJV4Q_r3_Mx1cvBspoi61NhDv707oFP2c5aybOKBho9f3nTxLxsdPs2xwdedlxa-oXEBN73AcD3XM4u5YCMdPwPhQUFPtbBLhqIUF6raaIbJpgMRwZY-x6tz7gTSm4cABfymaAZJ57gH0y_bSS54cLPUR0PssYJD7vEh0WALwtGBxRYzGny8fvOyKIHli4qwyfhP9Xtlw58O]]></Tracking><Tracking event='unmute'><![CDATA[https://a.udsp.io/tr?ev=vnvtHIHsFHTO-LrGUjybTO_Glp1jzYDRBhcjharPpFAU67loAS6QR3YgacU93XrdCroO1BoUVsyrmwir0-wagBNEa6cfs1idnFPui7kDapFhZZJBenLQj-shViepy-8r0MvxAyzcu2U8j-TM-_vZt865k6EAYIU7ZA6nJZx0I9mBfsoTD8cSOSJn_gAiUjRUa5V3jSwVQzihKBqJeXmc987xAKm7Z7YWzpj_CSZIrIMW1QN-mxbjj5KO2bVjpNk5qDnT40wTHDxpijwKxAXMMBlu-fbBwJewH_VZ6t5w38Lxk1JOABZ-ZIYDRQsoxmdFPXy1r656Pwt0wW6NlZN7-T4q3VSzn19joWcJnC9a0cASA5WkQJuBsEvddNPH8q67]]></Tracking><Tracking event='pause'><![CDATA[https://a.udsp.io/tr?ev=wMyAJ115VanRuld4ZGZ4c21oj9v2NgScrcBo27gihe7E6SxAexBy4p0Sx8L6VDBaCWZmibHD4DnHOJzmZmOZddpulJvOoRDpnCYAL9GiQxOY5cjRKgSHT150VccD5-YQdpT57L0gJpNWJ3QSRwQJxVrAKYrz1p2l4aKw-3UQo0gBTelk98PY23IGu5ddPhhlHj39wdmoqgsBeWs4KXdrLtVgLrhFo00elYuAw5x7u5OpuzUa8YGHTe6r1fRREPqim3esl8Nhx-WAmiKdwP1m7W5EzqcVNpyUiyXjXtu5Zqj1ct84Y-VjKP0kfSv5pkP_rUcwlFgRv8kbojxwI-GENm4Ww8J6zCYnjKFE_3SgM-cWyMbV0Lepw5xMrmmcZ3tA]]></Tracking><Tracking event='resume'><![CDATA[https://a.udsp.io/tr?ev=-MOjD5W2c2ZaFzvOm_URHyp86ZAHsHEh8z26nt3SXQSsFDIqJn6dgymn6DoMmdwjnoYzZKHJuEFVt8k_0lgbOREN206tpGAbHReAZg2eUkoDQSWtJ3WjeLdl6Fy5pvwqZ71KbHVvNeoB_KqZthIA6Gp4uq2H8MTbNBa71GkGGo-vbrteBRG4_GB_ATdpFIC5EGboHX49liJuh4Ic2Z05o9jlBl3k2fIxeS985uGI-XSbAfT8lonfXs9VkNZA8AfELUXfsy_dAeLCBuMw5aRH17b3Dm2D-UzdB8UvuGxaed9z7fo7KiA6nzfUxeGcyvAsfD1qv4_ICvu7LHB8N6w3v14z1PABrprm7NkUNS3__2M4K0vhoqKFz1EJidk1VD_u]]></Tracking><Tracking event='fullscreen'><![CDATA[https://a.udsp.io/tr?ev=61ycEgIwXuCDJtPaJIs4Y55ixYWuazuzIlaIMCj5m7Ia-nDkqCfsn9427Nuowyj6TW9ltjKq437UiOc9QhOgJd_VT9-7g5GSUvCChFBYLYvwW9Qkl54UE487SnbrkF2MQRF8DETz0s1i2-rPKdCASD0pKyG4H0bQOaMOOVYX1ws0HfZVdB-32YEClZPyjQJ2NARIi8ths7ph0n1MPEX4TID0etBJYqKFSlI2u29xExwF18FmU-UXTkbtXf7CmLD_-thkC_vMcczvNyPakbbmNQinHTGE7kVPPmUvUXPW8vmCAvyxkQ-ZjAHRRylFs2wfT3JzYIJfJhlSzlJnxfMOlKYgfTWSAFF5qUO5NYld0dg3u_K545cuvDK0zZuACot7]]></Tracking><Tracking event='exitFullscreen'><![CDATA[https://a.udsp.io/tr?ev=803HFhU3mLTUwSND8IkLvA8eJmNOADHBZcpqPXGf0_q8QlRaiNsR2lqSUxY0l1J0k4PeNVpu1PlbIcMJ8jrNqIY3ovTlbmTU5bQW57IAg0XFVNHLRc9OPlq19RXXtPLRp2A_7fKaoegbj2-o1B0OnOFTNrHm5DZQUubR1T8yTKS2Fu0C2EYrN4oWgTXBVeSM1T7Q9XMuYfQ_Zt1SAEpYFJlbpd9s4DX5s8niHgyHBk1RAJTn-qBTJYsLlutT1IIvMj2B8DBr5-lMWwS50FspW0wmfcMpFgNettgze7rDnHKo1PtnljwOiV6PxETpLpzCE4I0OgJil3JQnIMBfhYmmVdLRujSWUot-S2E7oF7SO8T9-Nhf7RcTUKRDue82LB2]]></Tracking><Tracking event='close'><![CDATA[https://a.udsp.io/tr?ev=xA7rMueP50hWsUt_T5GI23t53s5ZR7d6RzJLfpW7GEw5gzM332-DBagiCuCrRAcHG_PGt9grJeYh8XGGQiQsv-9DLW13MRkOx6-Obp_7oIBH25e8M7Po010EDrmJQa1BM67yMoIMO7ojBK4SHvo9C69TmP-_Lw1odjKA2Ooahrvhk21anGLx0gTD0d0WqQTjnO-rOqr2qORr1HweIrYzRRoVTJLb9ZL6PgA2bUmcusiN4xEefYkr5PbhS2mi9jHmux2D6bJQAZqM9_EjEh0y6HeXi4ts5cU-MF0iV2m0mRwGEzvrOIt7BJOpKMLob0YgTdGgCVVwRTqcmW3uOSTg4gm61I-1QK5mi7msWZQYMF4qP48ace6moO2CeVC7_yrr]]></Tracking><Tracking event='expand'><![CDATA[https://a.udsp.io/tr?ev=rnzQuUjuOg-0wl5ZSJWYTgylT-v0hj9HglRkgv2MTxd57viF69DzeRaGq1yQ51qPK7kI1CM2TD4KCkHelwkG8xsfAfuCVZozhbW_F76U8ElpeALtZ0G8fagisVSzUh4WVoiVRAN61dliP7DYHNTW2B4E0HV89qLDPLuuXuye-sJ6EZC-9KNY23zDTNEq52IoHv3TkMooKDsDSmiZnSQ2AxRa2NV77r3BfhkuSTLTqPK103-nzyLlafICnYBs24bmdOVFeJj2Na2-sVcv1GewBKa2heNrL35WAw7nNgcTU3xV69qljetN0bam305rLV2Q_ZyIDH-j2OwG65d5b1ak0FNoXVAIaPuLv2UkVzIfpOmr_MA-Obn3E8J3sjBEyoeJ]]></Tracking><Tracking event='skip'><![CDATA[https://a.udsp.io/tr?ev=9Bw-ZU6Xh0uWataR_MqBNHtsvOk297wbK1aHoNxeMjMlmVxYQm77T5fYKXMappvxAA5L-EFuQqrjPWIeSeSPDXHH4NR5vsS4tyMagYF1MCsOFIegAz5_4oGii7Q8Ajew5wReuqOdLdLMKQnfaIYUEDsS1GLY12hkTI6U_Gh-O3GYwWK0G1CVwDTbs4XT13GNm58daCXlUIic2A4WVnivv0tSywNeEyhR0szfFM4_ldwVejv72Mu64nU8Ya4ZkQ1aqHxe4kpglyyRpt-mm3q3uLdsZ6jTD5zPczFvVeLnPbMz4wIrQnoUC7fz8Zin5FrVHgAE07DTkkbTvCv5T0ust-CAjupDB9lxK-Pq0jbisgyBV4OB8oqc7chuuA1kuFn2]]></Tracking></TrackingEvents><VideoClicks><ClickTracking><![CDATA[https://a.udsp.io/tr?ev=4zrAOw41pBYzJufZ1rX-f3zBWjLfUMEHV6GlDixAcTksHxG6klgOyzJdT9gXUYLRRNkbIDaf9FQCrupAHlrkdhmKHb1VKCodzFeCWncee8vxjAGyKAziPmfcZ29lWfQhHcl3Pqbzn615mGcpofz-PsQbmB9en0a8MSWB4hOFnmCvgbQfxX81a669PV4PYsPWQEjY5UsaT44ImWdTn3H13rJ0X--4fMlV_cNyFRyvevE2vHycYH35MkrWXkxEF0PNrEcv2extJlTnWkCG95u_ssh9tycjk1N6Y_AlNQbDu95ztAAbiLWBaX-66FyzB4JD6vXd2NzwKT5ehF_2j_8GXB6DzLwniumI7Dc-QfUbdTFf6-5P_N6SEOQRxUythS6V]]></ClickTracking><ClickThrough><![CDATA[https://makao837.com/en/?affiliate_code=YVRO23739&type=banner&webmaster=default&reward=cz2zmmj6x3&campaign_id=PBGMS7768]]></ClickThrough></VideoClicks><MediaFiles><MediaFile delivery='progressive' type='video/mp4' width='0' height='0'><![CDATA[https://api.udsp.io/media/creatives/1f1f8f8ce35544b5b24e0cc76f372ffe.mp4]]></MediaFile><MediaFile delivery='progressive' type='video/webm' width='256' height='144'><![CDATA[https://api.udsp.io/media/creatives/1f1f8f8ce35544b5b24e0cc76f372ffe_256x144.webm]]></MediaFile><MediaFile delivery='progressive' type='video/webm' width='640' height='360'><![CDATA[https://api.udsp.io/media/creatives/1f1f8f8ce35544b5b24e0cc76f372ffe_640x360.webm]]></MediaFile><MediaFile delivery='progressive' type='video/mp4' width='256' height='144'><![CDATA[https://api.udsp.io/media/creatives/1f1f8f8ce35544b5b24e0cc76f372ffe_256x144.mp4]]></MediaFile></MediaFiles></Linear></Creative></Creatives><Extensions><Extension type='second2'><![CDATA[https://a.udsp.io/tr?ev=gSokESIpmtLSpnk93DqH-abVXPO9DySUxvb3kCcPtUXT4ga1l4Oip3PaJbwB7woaOMr-LKMn7wvrIjlH9_bTvs5IFt83ASTaL9-4Ecd0Xx4dRB0HKmz_XtWePEWdp1ZzdU6jWDrRf1zn9P152FyWdXqwIPj2Szd3DuA57VQgtcJBXPola_X_vSLaB8-5xbt56dWOL9zNURuhZMB1HeawA_8Kdeoz6tnDtoWmrqmG8N4E-uH4THIcYeHvMQpB6nLo_4HP4GR7o00V35xo8Kxdy4W_KsWCNoCZ5RqLIRNll25sHIaha5oRDd8BT7JzObNUU5obuRBhoJqVOd8Ugy-NXL404T6P7QcNYeX4v3ZP0ilUWLwLaM2MQRx-UnQ4DbZD&v=(visibility)&vl=(volume)]]></Extension><Extension/></Extensions></InLine></Ad></VAST>
