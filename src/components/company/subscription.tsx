import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Arrow from "@mui/icons-material/ArrowRight";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import {
  NFTTier1,
  NFTTier2,
  NFTTier3,
  NFTTier4,
  NFTTier5,
  NFTTier6,
} from "./NFTTierData";

export default function Subscription(props: any) {
  return (
    <Container sx={{ mt: 1 }}>
      <br />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box1">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/nft1.png"
                style={{ borderRadius: "100px" }}
              />

              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                MINI
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                Free
                <svg
                  width="20"
                  height="20"
                  style={{ marginLeft: "5px", marginTop: "6px" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.222168"
                    y="0.445923"
                    width="19"
                    height="19"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_969_1785"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_969_1785"
                      width="200"
                      height="200"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => {props.handleClickTab(4);
                  const newData = NFTTier1;
                  props.onData(newData);
                }}
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Free Users:{NFTTier1.freeUser}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•No additional user</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•{NFTTier1.platformfee}</p>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box2">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/nft2.png"
                className="nft-price"
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                BANTAM
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                19{" "}
                <svg
                  width="20"
                  height="26"
                  style={{ marginLeft: "2px", paddingTop: "3px" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.222168"
                    y="0.445923"
                    width="19"
                    height="19"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_969_1785"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_969_1785"
                      width="200"
                      height="200"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAe/0lEQVR4nO2de3xU1Z3Af3cmARLIJIHwaAIECXITAdmazMVarEUR220rAVtJVwF3t6L4aJfPxxsk7rJr9iOPXK1bRA243UVot4BbiNp25eln1YrcIe0qxOSiARSIvJKQ5+Q1uftHzqRDmMnMPffcc86d3O/n40czzjn3N3fmd3/n/F5HAAdi6LouhP4tCIIefH3vsfp71+w+VUHiOk8syJKfmJ/5QnB+B+sQor/FIRaWllfvV2tb7gaAbgDoRS+7oe8e6wDQ2fe34AfQ3QCQAsbufzuaJwkAegDABQAJ4d4o5aTs2/Fo3newPojDNTgKgsFHp5tuXf6KdiTkpTYAGMlKngi0AcBwQEr00t9O+96Cm0b/ga1I9sNRkBgRZTUAfZahF/ruWyJbiQyjQ591EwAg8cMyb+oYQWhmLBP3OAoSAVFWgz+oXuhb0vBmIczSCX3LNBcAuDRFcjGWh0scBQkBKUUvAATAfhbCLN3Qt2dyaYrk/C4QQ/5GHDje8L0ntn/+O+hTCjdreTihGwASn1mYvXLZ3PHlrIVhyZBVEGQtHGLk3TWzsjNHJ33JWg7aDCkFOVbbPPeB8pr3AT0hWctjM3QA6N245IZlhQVj/4u1MLQYEgpSfaF1VuELn37CWo44IrCxaMoDhfnjdrEWxGriWkGcZZTl9AKAq6bM64rXqH5cKsiD5dX7fLUt88BZRtGiJ2v08NrDa2bnshaENHGlILquC7nFvjboS8dwoE/DkTLv1NGC0MRaEFLEhYLUNfqz5607foa1HA4A0LeZF7avyL1tzo2eI1HfzTm2VxBnn8EtOgAENEWy9TLXtukFB443fE+U1Q7WcjhERACABFFWmzftOy+zFgYXW1oQx2rYkk5NkUawFsIotlKQZeU1B4/WNn8bnJQQu9LlSXI3+Urzx7EWJFZsoyDiU0dbQBBGsZbDgQgNmiKNYS1ELHC/B6movLRElNVuRzniitGirLav2XVqM2tBosG1BSl88cSfq+va/4q1HA7W4UlyX/GV5o9lLUckuFUQZ0k1hND1Vu35OSmsxQgHl0ssUVbrHeUYQgjCKFFWr7IWIxxcKcglXR8lymoTAIxmLYsDdVJFWW3af7x+AWtBQuFmifX46yd3HzxxdTE4LtwhjyfJ3egrzefiIcmFgoiy2g0Rejw5DFmaNEVKYy0E8yWWKKuN4CiHw/WkirKvgbUQTC2IKKutEH/tdBzIwtSSMLMgyGthZ+WwU9O1FtYCmCCVpYeLiYKITx1tAYBUFtc2SS8AwJPzJ5ZoihSUP8BQnmgEAKBDUyRPycLsR9FrPSwFwoSZklBfYqEPaifl6AGAhLzMZLVi1cw54d6A0u6H0xUrKp0VP7v55ryJI04O/B+PbTu551DV1UUA0AEAdsqwvaopUjrNC1JVEJvtOQKeJHerrzQ/6vqX1/T7WDok3rnu47PnGzsn0pCHEFT3JNSWWKKsNoNNlEOamnJQU6SEWJTD7hwumT1JUyRhUUHGv7OWJUZSkeeTClQsiCirwY7ovNINAIkbiqYsWZQ/brfRwXa2IAM5Wnu1YFn5SR/0Nbfmbdn4Fyjlb1n+o1257eR/H666ep/V1zGB6Uq3eFKQUNCRD8xjZZFAxVeWWnlLP3y9rns4Vo5OKcfzBzuWgdJCUyR3YUHGa8Cp56vZH0itqLyyyMprWGpBUOKhx8prYNADAAkkW/zHqwUJBX1GHr1e7ZoiWba3tUxB0EaKt01ut6ZIw0hPOhQUJAiXn9XC/YglSyxRVtuAL+XovHNG2k4rlGOooSmSgIKOftay9NNXT2KJPMSfMItePPHxp3XtN5Oe1wSWmmAATp+qYI0FCYXDz91DulEdUQuyx3e5iCflyMtM9lmtHIguCtcwiuVN9TRFEhblZ2yFvxx7zZqEx18/+WuSExJ9wnBU19G24f7s5Yu8439r9YU4TTMJ0qEpkuWNvKvPdUwv/MUnJ4CPbvpdmiIR+z5Iejn8wIeHg0oqQkXlpSWrd575FfDxQBiM3uW3T/h5yb2TLW//KcpqO/DRWb9NUyQiPQ2IKAjqeHgXiblMQuzGhKNB11O/UezjsrlArFh91iAvFjU1yd2qluab9mwRURBOIq6WbcY37a8refnAueesmJsVhfkZv9xYNPUnVszNyVK7t6bMm2D25CvTCsKDJ8OT5K73leZnkJ73fH37pDs3nIjrk113PJL7TWma50PS8xa+eMJXXddeQHpeg5jeg5l66h883vB9M+NJsCg/Yytp5ahr9GeLsqrHu3IAACzdUvNHUVb1vb7LPyY5b8Wqmd6NRVMXA9t4yYiV207+xswEZpPZmK431y+Zcv/ignFvkJyTB4vIEtKxk6qzHdMWb/qkBti1czKVjIptQdAPKW6UY9P+uhKrorF2QpTVzqXlNb8nNd+MSSM+f/upm6cDu4TH4WYeelgKUtfoz8a9IAkKCzJeI6Uc9bruEWVVR5twHtzUrBmm1jb/tSirXWevtGeRmHD6+BGnNtyfXURiLlwqfJd+iDMOy5yyXIaQ7Ab+9M5TW/ZWXllBYi4LYZpBm5eZ9KeKVbPyScy1Zldt+Z5j9Y+QmAsHnOWj4QHoqGVWqQXE4hyirPYA4zanB4pnZE0eO7JusPdc0PWRdxT7WmnJFAFiLnSWD1ecGJBhBWEYLW0OabVjCg6OVjC8ceSgbJnc/e/L9k4mMZchMNLiDe1Blr5afQBYKIeut5L4cqq+arlJlFU/B0cr4Dg3WNf0e0RZbcVdy4eCrFE7AZmMIQijvGsrDVljQwqinmq505hERGgiUQzz2LbP9i7+eXUVOBtxM4xcvfvMG961lZfMToSUhHrHx2Z/IFnX9ZgfNjErCFo70k4n6SaReCjKauBQVWMhCYEcAJr9gbEkGktriuQBANp7EkN7aNb5U9EwnT6NmtXx/jltiJ4uymo9gYlYLB3JKkjN2VYGRVBCI4G2NR1gk2Z1NmW0WUuCvuNOQvLEimvTvnP/GNMbY3nTwk2ffmxOHsN0aIrX1AlD3rWVXwEHadfxj55uttMh8uhZXgEZyssH656N5X1RFcT3efM3zYtjjCfnTyw1M77wxapPmv2BCaTkcYhKmtmN+1urcr9OSpgYca1788wLUd8U7Q0Pbqn5gIw8MdP7xD2Z63EHV33VclN1XdsskgJZAC813MRo9gfGbt5/fjXueDHTU0NSnlh4/YNLP4v2nkEVBLnDaJ5/0a0pkqno9uKfV/tICeNgjJcOnC8xMx7tR2h6tYRDVQ3fHewNgyoIcofRTMcw5bVCHeTpR2iNE69eNQ/6DvAnSHLTjI24Htv2+R8GfQMtSWKgxYzXCrU5tbzbtwlIWGIue+QOIAV9F1j4SvNTge6GfVCLFfEHeaiq4bvRtIsgve+WeVMyBQEr/YDjIqduQFbx7VV5N03PTKk2O6FNMpABwFzxlSirnQBApRPmovyMrRuKpobNMo74AWj/6EzeTN4UxA8ASW/+Q25ubpZHs+oiz731xYbt719cDX3WiWlmchhMNU3g5fcXdolFe3OOuvNhgbKLeaELAEBTpGRNkQQrlQMA4Jl7s5/WFEnYVzxjkpXXwcSVa2I/sn1F7m0khRkUXW+NlJ8V9kXK2ovdeYIzy0H9gMmBfHm5LfPusqrTQGlpEiu4qwMerEikTTo1wf53bR7T8l1SsFYOAIDJY0fWobabtFM3BqPXSPZsKOgHy7Tv8XUKgj4MtRs8ISUFKwLLifVo+/WK6flWd1E3CmenZrlMVqDSsobduq5fpw/XvYA+DI0bHDhS5sVKZW/QdR7OWb+qKdKoghvT/sRakHBoiiTkZSZzEzTdf7x+Ac449PCh4d5OzC32XbfvZhkHcY8WBCx/OfP+uH0VjsyXVNGoWDVTArqZEBF5cnvtmyaG02pjet1yjqdAYUxUVF5awlqGx+82l0xJE02REoBB5V4YRiwtr34Hcyyt3LXrlu3XKAjaf9AwZz246/bVO8/sIC2METxJ7ss/vSdLYSmDUVDlHnPU2pY7cMah/DwaSuIamJt1jenKLfZ1DXzNIrCucee6j8+fb+xkeUiL31eaP87sJEvLq/ertS13x/LerPThpw6XzM4xe01OGCHKqo75cKSx2klE2SP98g28KBVvzDMLs1fijDvf2JlJWhYjeJLcpvpTibKqi7Kqx6ocAADnGzunirLaa9Zrh36U3WbmYMmB4hlZQL9+nc0eZNnc8eWYQ1m6dttxrUdQMUxcWyAxj5STcsiEDMSoa/BPNjoGNdij8QC/xqnRryBHP2v+BrD9AQ4K+mGwjDdgpdFbEa/BnXPHo3mD1j7QYt76419gDqXx+3Sve/uLjcE/+hVk2daaD8H6/Uf3h2VewzEM3EgsQZpx1s1Wyv3S/nP/ZNXcFMBKZ9cUyYU71givv3exOPjftJdYiWMEwXACG8NewEGwrIeVcm8+ULfWqrkpMMKEZaWaJWC7OAgjWJ+3F44EnB8ZsoRcBA/tQKiC8OzhYGpBls0dH1OLmFBMBMVowEPtSDfmEpTGbyEQzMtyAfT55cH6Q+DbcdbxjFqehtL1zMLsfzE6SK1tuccKYQaA+1BjmiGLSMRZgqKgodXyu4N5WS4AACN+eRPYoZlCOLiqrRhAIjrnJGbQ+3n+TLFATX5nD2J/3Kh+OyrIGvOwvArCfRMKHjef/dQ1+rPnrTvOWgws8jKT1eq6donS5YbFcGIWT0VUQRK2f3DxUaOBYykn5R21tuU7VgkVCi0L0oET/5i37vgZK4QxCJY7smLVzDmkBYlCNMvAZZ/i59784lWjY1DAk0prIFoKghX/4ITeT8923MhaCIfroLIPoaUgPK17jeJe/lpVJc5A3IpJh5ig8tt1cZDGMRisI+gAANDsD2B1bMStmBxi9OIkL1IgcLT2aoFr77H6e4EPv/g1oEAbL1427CQ5TZGEzPThp4HPTTIPuEwkL1qJe/OBrza51uw+VQEWr+eknBTDUWVKgbZYMdWc7t2S2VM1RRqRlT68Fr3URkCmeMLwSmHD/Tf8jRWChKLWtnwj+IS2Ms2k97n7Jv+9hfPTYCSJtPXDJbOnaYokaIo08BhqntN8aGD43i7yjv0NzjijBOMgVu5DXKjYxe4QDWqFpt0c++zqLQ9sPRnJEdADnMerGGL5/jlhwL8dIpMgra1sUUvziR+xgHprhf2yfaeapAdf1Y6GvNQJnMY0TMBtoZ6jGAZo8geou6u9U1NVGKA8K7ed/M3hqqtF6M8usH9ulaMgcUKSKKvtmiIxTbx89aHpPwaAHwMA1Ou657ZiX9Cd3AGUC4oI4ShIHJEkymonahLNHJSh0G9hkDOhF/hxkcdCou+ztq97bxz5Z9aCDITLm/jR51fzWcsQhWGirHLpeUJeMrtlLghHTjdx0VBiIFwqyLFTbfNZyxADCd61lV+xFiISmiIJJQuzHwWbBCh9p5q4/M65VBBd0G2x9Gv2ByaIstpz8WLreNayhGP53PFb0FEI3GVK2AUuFUTodXGRgxUj7m89/+lXnJxXEha0X+K9UQOX949LBdEFnfcvcyDBzocdvCoK6vLO7X0VAO+wT6vhUkHm5Ix6l7UMmAwH6DvCmEC7UeIgJeHSueDN8RxkLUM4uFQQKSeVm5ORMOkP3AWtiiir+kv7zxcPNogGH5R5x7CWIRxZacNMnyFvBVwqSJzRHy/ZfOD8xmCn9uA/m/fVraEpzFhB4OEwnYF0LfZmmDmByjKC3iK7RmDtyDVpIy8dPLdOlNV/hTBVl1YdDqopkoDiOLbwFrIkeIO43bwNEcIG9kRZ7QBkgZZ/a3xZyQ+yVxO8Jk/KwW1Va3CJxWNTN642uIzoX569/t7FYlFWA6Q2/jQKjgzAr4I8Pn/iz8BaAXGDVNzeNIa4AABEWe0yqyi0Co5ihMvvWspJqXI9ueBrL4G1zRGGPf76yd0Wzj8USQQAEJ86yuOGGwfDCvLR6aZbweKtwRN3ZT3sEgTrAzQHT1z9kdExniS3U7cdDUEYJcpqPKSRGPamLn9FOwIWt5Oac6PnSFAwq02cYQulPnsL8cq9OCXRhIXmYon1q0dy57KWIRJBBeHiRoVCw7LFCzgWmie80zx/ZC1DJGgpiN1/7LGmZzjLwjgj6AvvBSvXc7rut2xui8nLTFaNNKIWZbUXOPXKhMHODy4q3V7o7EH6NpOGv4wdK/PusEIcIxjt0r6er/gC9yy/ffwGo2Me2/bZXqAU6HQBAMzJSdlH42JGkaamvMdaBqMs9o7dyVoGA7C2IJ0l92YbzkU7VNVYaIUw4XABAGx/NO/7YIPTfhwiwvqHjgtP6S7XUFPmdQNc63+2Wth4CWrxiF32PAPB3fdaXnEqCEIvAN109xTv2spGo4PeLZk1xQphrMSqLFwLYCrnMz+YvMLomNW7Tm0Fir9bqvUgzf6A4QNlMtOTmLbGr/Bd+iHL68dAb02ZF/d7ZLo0W/atCa8ZHVNx7MrDVsgSif4b+/KyaT+geWG7sHr3mTdwxiErQqP5BFa60Lb3L6wAp2AuLIsKxv5H8L/7b9D8WaN/R+HaWOcUmnhCMqUwP+M/Lb5EC+5ybv1bX24BdgrSaeI7tTz3bMOSG/qP6xgopNUm14MCaYZgnXaCMkcNs7Fo6k88SW6rrEiLpkgenIHo2D2WzRuG43ynKJZGtVH3QAXhdnPJ8kBMlDmKha803/32qrybgOSxxbreiqscAAC5xb5eQCnzLNi8bNr3WV3bKNcoyNFnvKMpXLMd5+BQ1gdiqrVNXtyx0zNTqjVFSgp5CUdZOgEAMtOHn9aen2M205lpY767Z43+PeZQy89G31A0ZUno39fEPtLShEZRVq2WYSR6ghlWEk+Su63ZHxhpgUxRWVqu/RFMmvfQ/YLR1BvUQhQ0MwJAf5GV7fZ0lHqMdS3KH3dN6QCbSKaut+IMU5+9JQUpFwsSRVnVScU4WMRKvGsrO5v9AZaH7XQMsKRG0MH6LcB1gUs2T5K+5EXDm0TWm3UA0C+0tIxjLAMWjY16GmPlAMA8Om5pefVhoLM/jq4gyP1G4ymNZb3QkxfLXUwA4Y7S6vMVlVcWMbo+FnsrL91/6zrfBaZC9DkWsB7Iam3LPNLihKErnOv5uhfQU5qGZcEuLtrxSC7Lw1YSVu889cabvsv3MpTBEE/vPLMdGB/8ufz2r/0bzjjk0KHxwB4WboXCcrOGffa4NM3zIbD1xLiLd59+47OLHTkMZYjKoaqG74Y2n2NIR8nCyf+EMxDtOZn9TsOu63Rdd+UW+2h0W8QOdgFQ82xEhcfkRF7uDQDAoadnTpo4Jvmc0XG6rgu5xb5OsD5m015T5h0VswUJpvpSIIWnLxIXUVY7j51uMlR5aBUfnW66FVkNbsBRDgCqAc2kSA6giKbrmYXZK62T5xqw9yLoyc1DvfuwB17RPhJlVT97pT2LlRCirOoo6s96SYUQGk1aVyo9v/Iykysj/b9Bhaf5dMe9kcgMc3lkG42lV8h31A0M00fCEKgp8ybiuuYpNr/o0RQp4n3jpeQRO41EEASdQvQfC1FWOwFF39fcO/mRh26fsJXQvMEfXehSiiflAABwm4xb9QCdzzSoDgyqoXWN/ux5646fIStPRK5qipSOO1iU1SYAwN7wU6LfI2PUuiCl6IG+ZQeP3fhDadAUCfskK1FWe8DitqKI3vVLphQtLhgXseZnUPcZ5Wq+NO/aysu4gzVFSgX+697NuisTgHfl6AsIYivH0vLq/UBHOQAAAoMpB0AMX9j6ohseJCfP4DT7A6aWfMhl7BwGxI7eDxQp08wEam3Lt0kJE407Z6S9Fe09URVkcf7YX5MRJybSCDgGaD19HK7HZeYMRLS0orWX6nn1oelR+w3EZPIpn0bUVX2uYzruYE2RBE+Sm23e0dDkKgGvHTVv5KKCsdtjeV9MCoJOI6LFsMJffIJdwQcA4CvN/xo4jfBo0mTGwQIAIMpqO9CzHl2hdeeDwWvhzGhR9jWYmQD5tlnWXQ8VWjRFMlUOLcpqAABw60RwiFkRY1YQim1sEHq62f2IpkjDwFESK2kyk0sH0FfEBXQf1IGaMm/MziBDgmWlDz9rXB5TmHbbOkpiGc1mLQcAAIMiLreRXENDCnK4ZPYUoOtGTUEBQFMgJXEgRV+sI9XsNKKs0i58azLqSDBs2j4q8WYYHWMSjyirpk9u0hRJePLurKeBj1OgbJvBnJeZ/H8EuqqAKKutAED1HMrtK3MNdw81rCDp6cJVo2MIkEwicfKJBVkbNUUaBewzgHGenKxlbjlS5k2rWDXz62YnQt8l7e40+pypnveNDsLaHG1fkXsbzjiz7D9ev4DEPJoiJQPbfUmqkTPORVn1A10vz0CaNUXykOhN1qDrppdmODw0d/zzOOOwAzuMCp16F+eP3bK+6IbHSEzmXVvZ1uwPsMxtaofBc6t6QdfbQRBG0RIonAyaIhHJTthz7NKP1uw6sxPohxe6NEXCqpHBFhRtdtpxx2Pi2lN5+eGDn16ZT2IyX2n+yJeX5SwAdsuXaMrpYqgc/uXfGl9GSjku63rKml1ndgN95eiuKfOOwB1sKjVg8766NS8dPLfOzByYNJFwMYaCLGIXUG6OzCE6AAiki71EWe0CBjUreZnJvopVMyXc8aZvAqsPDgDte3568+wZk0Z8TnJS1NCOl0Iy2nQcKfNOIN0HmWJ9x0CazbqjTZs7FGNgsR9JXrzpk6qaC/4bSE6qKVLi4oIxW4BdczoWtEs5Ke9oipREUjnqdd3DUDl6agicCEDEjEprK1ua/AFWa2XTT4lIoGVXBwBgr2E5JwAAbqtq5ynWlYeFxOciJjzDpRaArrd6khO6faX5lhzf4F1b2dTsD/BezmsES/YZQQpfPF5ZXeefBczq5IVGTSFzlAfpjVh/kwJGtKFAoCVsf+/Cw8+9/eVW6IvGMzmGwQTdAJBYWJDx2sYlUw2fLhsrHOzhsF264SCqIGt21ZbvOVb/CMk5MWjXFMnyHy9afnUCNz2oItIFAMMOrp45cVJG8nkrL8RDm9Os9OG1h0tmTyM1H3ET6137pwvN/p7xpOc1iP/DMu+EMYJg+UYbFfqwjHIPBpWHBUB/tJ/1Xs1UZ5xwEA/a+EpvmQAUjsqKQtJtxb7L6KhjS0FpKzxWL3bQUI6qr1puQvtP1sphuqoxHJZ5GFAqM9VszQgENEWydE3Ma39hqzs7cvS5iVuOIJaF/VGlGesMVAAAt/jU0RYzh3A6XMtlXU/hqEF2h1XKAWBxXszLy3IWWjl/zAjCqKXlmsrRE8+2iLKqzy32NQMnzonCgowdVs5vqYLMnzXmgCfJzUOBUj+irLZeutQ6gbUcduOSro9Cbnye6LDSZQ1AIbPSV5rPMlU7HCNvVz49K8qqvufYpR+xFoZ3zte3TxJlVb+9z2rwlMjZYuLE3JihlgbAMCcnKmY3s7wu3eL1c4GF6UUDoZabjzxJXHYXEWW1g+MfA3VEWdXRA41H2mgpBwDl4hWU+cvjjR8O0JcmIcqq7vu8+ZusBaLNufr2iUgxgg8xHq19i5WpROGg3lmR846HCQAAD26p+UCUVf25t79gUQxGlb2+i/eJsqrfteFEsOcZr7UwbWab1OHALBWZafavMaJmvnKSZnEtut46WHsemy0pqe05BsL0+GIbKQlASGLikTJv2mhBaFpaXr1frW25C/jtcRzISh/+xeGS2TkAXJ9nOBiWZmhHg/n53jx7twahE/osC19WIzJ+0PUA4+4oOLSwWFaFwlxBAGxn7h3owFw5ADhZGqBDb3jJ7XFgTycPygHAiYIAAPhK85PWF029D/g/iNPBOroKCzJe0xSJm6UrF0usgXBehORgDcR7nZGASwUBcJRkiMGlcgBwrCAAzuZ9iMDUjRsNbvYg4dAUSZg/M+0NYF/C60Cejqz04ad4Vg4Azi1IKOigR64V2iFWyPWtshrb/OA0RXIjVzCveVwO0ekBALCLcgDYyIKEYrMUFYc+uAj8GcU2FiQUTZGG3Tkj7bdA/3wSB+N05mUmH7OjcgDY1IKE4ni6uIZoG1AW2NKChKIpkrDh/uwfoj9pHlHtEB4dAOChueMVuysHQBxYkFDqGvyT560/roF9smzjjZYdj4p3STmpPtaCkCKuFCQIOpwzAfjqwhHP9ABAgtWdHFkQdx8oFLQ/CYD96k1sRTwqRpC4/WChbNpfV/LygXP/DI5FIUV3YcHYX21ccsPfsRbEaoaEggRZ/+YXZds+uCgDWhKwlseO3DUjbe8rD01fzFoOWgwpBQmy/3j9gie31+6D+D5/kBQBAHBvLJpSVJg/bhdrYWgzJBUklKd3ntqyt/LKCtD1VhvWbFtFAADcN2Umf7J31czZrIVhyZBXkFD6g45DU1n6u7bE86bbKM6NiEBIhD7477i+V45ShMe5KTFwsKr+O49vq/0f9Ked3cY6oO98qO4pjOIoCAbr3vpSef39C0+xlsMIhfkZv9xYNPUnrOWwG46CECJC0mRvyD9u9G8A/FT94FzBAOgwuD6fTgeA7njIg+IBR0EsRtd14djpZu+m/edfUGtb55KYU8pJeefxezKfnTPFc1QQBCeb2UL+HyCaBOAPRk3BAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => {props.handleClickTab(4);
                  const newData = NFTTier2;
                  props.onData(newData);}}
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Free Users:{NFTTier2.freeUser}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Additional Users:{NFTTier2.additionalusers}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Platform fee:{NFTTier2.platformfee}</p>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box3">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/nft3.png"
                className="nft-price"
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                FRACTAL
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                49{" "}
                <svg
                  width="20"
                  height="26"
                  style={{ marginLeft: "2px", paddingTop: "3px" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.222168"
                    y="0.445923"
                    width="19"
                    height="19"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_969_1785"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_969_1785"
                      width="200"
                      height="200"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => {props.handleClickTab(4);
                  const newData = NFTTier3;
                  props.onData(newData);
                }}
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Free Users:{NFTTier3.freeUser}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Additional Users:{NFTTier3.additionalusers}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Platform fee:{NFTTier3.platformfee}</p>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box4">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/nft4.png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                OPTICAL
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                199{" "}
                <svg
                  width="20"
                  height="26"
                  style={{ marginLeft: "2px", paddingTop: "3px" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.222168"
                    y="0.445923"
                    width="19"
                    height="19"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_969_1785"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_969_1785"
                      width="200"
                      height="200"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Typography>
              <br />
              <Button
                onClick={() => {props.handleClickTab(4);
                  const newData = NFTTier4;
                  props.onData(newData);
                }}
                variant="contained"
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Free Users:{NFTTier4.freeUser}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Additional Users:{NFTTier4.additionalusers}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Platform fee:{NFTTier4.platformfee}</p>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box4">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/nft5.png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                PARADISE
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                999{" "}
                <svg
                  width="20"
                  height="26"
                  style={{ marginLeft: "2px", paddingTop: "3px" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.222168"
                    y="0.445923"
                    width="19"
                    height="19"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_969_1785"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_969_1785"
                      width="200"
                      height="200"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Typography>
              <br />
              <Button
                onClick={() => {props.handleClickTab(4);
                  const newData = NFTTier5;
                  props.onData(newData);
                }}
                variant="contained"
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Free Users:{NFTTier5.freeUser}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Additional Users:{NFTTier5.additionalusers}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Platform fee:{NFTTier5.platformfee}</p>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box4">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/nft6.png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Cosmos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                2999{" "}
                <svg
                  width="20"
                  height="26"
                  style={{ marginLeft: "2px", paddingTop: "3px" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.222168"
                    y="0.445923"
                    width="19"
                    height="19"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_969_1785"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_969_1785"
                      width="200"
                      height="200"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Typography>
              <br />
              <Button
                onClick={() => {props.handleClickTab(4)
                  const newData = NFTTier6;
                  props.onData(newData);
                }}
                variant="contained"
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Free Users:{NFTTier6.freeUser}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Additional Users:{NFTTier6.additionalusers}</p>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <p>•Platform fee:{NFTTier6.platformfee}</p>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
