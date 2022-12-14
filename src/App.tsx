import React, { createElement } from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { WishList } from './components/WishList/wishList';
import { TWish } from './react-app-env';

function App() {
  const wishListData: TWish[] = [
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hN16vUZwekoQQaycS8jhj0XV5V4STOd9og&usqp=CAU'
        });
        return i
      })()
    },
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgVFRUZGRgaGxwbHBsaGx0eHB4bHBwdIyAdIBsbIC0kJB0pIBsYJTcmKS4wNDQ0ICM5PzkyPi0yNDABCwsLEA8QHRISHTIrIysyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwMjIyMjIyMv/AABEIAUIAnAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcAAQj/xABEEAACAQIDBQUFBgUCBQMFAAABAhEAAwQhMQUSQVFhBiJxgZETMqGxwSNCUtHh8BRicpLxM4JDY6Kywgdz4hUkU5PS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJxEAAgICAwABAwQDAAAAAAAAAAECEQMhEjFBIhNRcQSRobEyYYH/2gAMAwEAAhEDEQA/ANTibkAKq5eU9TU8Pg1cFnyyI101BptZ2PbEMTvNwzy04DlQWJRnO6cgpzUHKJ1J5xXjyn4heLA8SF3DugBBAETrxJPKKj/D22AzEAawxz8soqQxRBZQsgExAmOp4EUMcY4Yy2UqBwg50EpPo1I9bssm+yuyg5r3DHjnkKpt675YwB3tSCDy4jnVqJcDEb8BjGZ4gZjpI0r7/EFt0E708AJzGufAU1N9bCgrEWwbcrJJ05xzileOS2AAGWY4Zxn0yB6TXzFXrjSJMchp9JpBtC8CMjpMzXRi/TtL5MssP3DsTtu3bIUAuQQYgRlzzqy724uC4txLNsbkhVMnURqI51j8NZcktAM8SZj0yotFI+6PI/nXVHFFOxvpxRprXba/vm49m00iIBYAa6STnnVt3tPZfM2Wtnjutvr6QD6CsygmplIFH6cbsbgjUbDvbzhkIIjKPGn21LSgK5yJcZdelcyw2KuWn37TFT8D4jjW1wG0beLUb1x0ZBJWVMNzHdzT41mqM0OOy2KQDvcWbM8M60F/AW3JMQx4ispgMJFsd8nXSI18KdYMuFBLNuzAbu+mlYVoEZIobE2cpjWjsQm8cnYZ55L+VRxWGYIn2hI70ZL+I9KwRQuRipVcbHU/D8qpOFP4m+H5VjFjYq4XBtqxC5GNI04VoMILZtyVGchuYPXyFKdnC7bMkiCuekSJiOM0OiKb7i6+6rASuebZEAnnrXlvi+vDniH4C/aRXBaFDGJGcagg8aDfAB9+4JRfeJ3ZnllHSpoyW98R7x4wTP8AL4jnRe1MUlq0EttLNAEmcjqctDWt3oJnLmHDtuq2/caIB3hnGvTLnoK0NrZ9vD293JnbN3PH10XkKX7CwrA78BmJA/26x8iT4DhTbG4cu0gSPgT+Xz8NeyEaR0Y8dU32IcapZGIAVOZHeaeQ4Drx+NBPsO2V7yy0THKeHj1p/ftSVB0B3v7dPjB8q+Mmv7/fGrJl2jG4nY4GYUR8aV3cKy6E+edbu/YkSKCv7PJBaJA15inUhHEx6SOH0q5roiGBHjTt9kEgsoyGvhQz4c253wCvqvnNGwIROkVWlxrbB0MMND++HSj8TZH3cunD8x8aWXVI1EfL1ogZ1bsTct4qzvHVDuss6Nr6cq0WJ2eSIRt0a7vCa4x2c20+Eve0T3SN11MwV8BxGo8+ZrseC2j7RA28kkTqYIOhB5RSukRkmnaFCOS0QdYNN7dpXtlYzDOB5MaV4fEW0YnItJzzIq2zjGYkKyAyTnImTNKpDtAN9Spgiqd6p7SxFxnMhMstTnHGgftP5fjRMG422RmWLkAjlkeUClKXmIKH3dCJzkdYk/pRGHxcd1odc8znnw+lSx9ssSctzTLKTyryoLi6kcjKMMhdt1stMySZHQ9K+phWN4JBKEE97XdETPITEzwmjNlIuUDPOF1/ZqVy8HPs7UZndZxo0ZkA/gHxI8Krjtz/ANIrjjyaHGFUP7hG6PfP4ug/l+dFezJdjMKsDxOp9Buj1ofD30thVA7qgkniTxJ61UL7birxMs39TGSPLSuo6qk2FrhVffA4FR5gSfgw9KG/hilxARvK0qehMlZ/tA/3VXs3GbiNP3nZvIxHwAqV7EuwhV8DwBGYPqB5TTJGqWy+5YCPkuRGY/f7zpPdxXsrqgjuNkSdQOE/0mR4HpTsPvgMfvCfA8R60v2phFdTPl40yQyVrYBjbxBYKIE8KUXgDOUTkR1/I09w+FDpu6Moy6j9NPSlOMt7p06EcxxpkajNY3AMmaZr+E8PDl8qXhwcvUHWtLiTGswcweP+aTX8OCZ49KaxWhTescjHy/TyrUdmNtrbt+yvNAHuMJI3TwMaQdDpB6Vm7hKmDUMO4t3FuBQ26ZKkAg8xByzzkcdRmKLFOih1Y/Z3EcfysD8qlMa0psLhXCv7O2Q2Yyj5UxFuxluQuXP9aQUOsQYnjTZ9jicnMeFZ9N0EQw9ab29riMwCee9WMK7uzrJG8DukcQRE8OlSw+K/4bmWJiRB/wB3+KCwEvc9mW7rSDPhl55Cm2L2PYTdMyYmCRH9Rn5aV5Tj42cq2VWFEezYkxIZhyPXqNenia+YWyttAEyLsQvRCS0+mf8AbVTOxf2YJKEjPjnmTOmgJz1qf8SDfYx3bakdMl3m+Sr5V04Yvvw6sC7YViWG6BwLBfIHP4AirLpO6eZgDxNLcZeK+zTVtzeI4kwP/nJPx0onB7xuorGZYExoIEwOmXzroapWdHINxFrccqNIU/CPoag2KKAAnumRHjRG3e7uvz7pPX7vzakd66WPTlWXQIbQYdplYIHdbMzwJyYeRznpVWMx7HLh+VBpcHftMOG+vgcj6HP/AHVQt0Lk5z00JkcDl9eM0RqDG2luQ4UyNRzHEen05VLEkMm9MgwQfHQ+GdLr11BBDAid0wQYJ0n5eJFewt6A9o6DNf6W/IzTIDQLiBGR9w5zxQ/i8BoRyz8QnTUcRkR++B1BpmQSM9R8xqP3yFK8fZKAXEz3REcCnLymRyBPQUUwUBYqyGEHX9+opTuEZcadu6uoI0+IP50Ay97dbU+6RxgTHjr604jQd2a2l3lsPlDEofGcvMn1roOysH7TeBygZHrXM7NlRcRnHd0YjKVPEHgQYYHmBW72VjWAhjDpkxH3h91/MfHeHClYjQyxeENswYPWht4Vbdvlsy0nrQpNABobWCLAd0CV7xORmNdJkzUhsm1cAa4oI+6MwN0aZddfOvm1Ns21VkRt5yCAFzz8dAaT47a9/eW0iBJEDOWygeA+NQjjhFpekaDdusqqttAFAOgERy+TVnsO59jccasBrnnceePQGvuOLKbm8SSBJzngY+FfGytFf57Y9A9UfZ2Y18UWY9puHOMlAPLKQfjRGDtXHeyzEoG3vdI3zxOee6O9w73VTQW/9pPRT6Ko+hp5jcXZtewW5cRGU6MwU7rKw3szoCBSv7BnoPxuzVNhraAjiMyTvazLEkseZNZnDHeGeTKYYdR+5rZWMSjgFGVgeRB+VJdpbJi6bqffEMOBYaeskTzjnQTExyrTFV6xJUjUZDz/ADIA86quIe666qcxzB1HTn5eNGkTI04dQfzqGLBgXFGcw68J4+HOfDma1lyjE4dLqwQDIykfsjOkZR7V1AZIIgE8VbTPmDkaYXdv4VGCm4oJyI16T3Zg8COk+JqJbxNtlR1YiWRlIME6gxwmPUcqa6MmgEHM8CCPHP8AWapu2TuupGQz8j9NR/tqxru7eQkQGVR5mfiCB6mmmIRVZCfv9zziR8mHnTpitHPnBtOfwk5/vnEfLhVtxxKHXiPLMfKmm1tnGSh6gHqM1PofjWctsQdw8C2vAwQR6/GnRNjVH77WW1BJtnmDmB4gfKnmyt5lV98hkPs3ED3D7p04GMz/ADVmtuDPeGRUjPyH1Ap92Zxa3Dn99Sjj+YCQfMb3rQfQrHtywfxn0FDfwx/Eavdj97Xj41AXOtAQm2BZLbOcjAgeYNWWnV7lm4GksYPPh9aa4+1vYe5GoUMPI1mFu99d0mCCegJgSP3wqOSPzTJd0fMVf3jiDzt7w8O/8huir7rdwHhIP9s/rQGLP2p5PbKf378fEAVLZGIFxSh4qGHgAFI9VB/3U53LRXtvGmyjOPeKELxznLLn3j6Us2lsW3awzXb1xDiH7ztcYm45jO3b5kSBwMA6DR/isKHUBxIBIM+Bz6cDTLtH2fGIwiuksyFLqjiV3YdctTDEgDUqBRToTJ2jlvZHbWIwd9XBm0W+0TOApObDqNfzr9B6jxrmlrszaNkupDBlhYIzJmABzMx6V0fCoVtore8FUHxAE0k6FyJKinFYBXz0b8Q+vMfvKkG19jOyFCxCH3ymRIHDmoPEjhx41q6+EUqYik0cZ7XWcNaX2Npd10Yb9v2eXeQMHZ9WIBA3SfvTwFY61jrttp3ikHuuhKlekj7tdh2zseycXce6Qou7rqzZAkIqFZ5jcBjkRSDG9iVu3Et2iSjHvvqAk94z+KMgOfSYryXRVJcbKtnYpsRYuJcn21pVczAJClgWgZRDcMsweNH3cU9zDBt7vKVP+5WGf186dXtj2k9vcVR7RwLIfiFMKYHIKST/AE9KWY62N1ktqFQqFUAg6QATB94yDNBNWMpaKsff9puPEbygx/NmPoBSja2zCbqMoyuEb3Rlje+An1o5LgO4DlmSRylpI/uLUZtF/s2YZ7qbx4HMANB4HdJ9adAMxjnFzfK5jMemQ+QPnQewsWbdzxEx/MneHrBHnUsM0OQDKtofD6xM1TgLJ9pP4TPpn9KcWjo2Ht+0zV+6RMlTEHyoTEEoxXIxxg/lWg7F7WU4VUbW13PEAd34EDypk+08/cFIR3YPe/0L3/tmsk1tlJjPdS4wA4nd+cketa28s2L3/tkUiW2EuqI91GBiSAT3syRqYqWSVTSJwfyQqxliSwGpRCp6iWHxalGGuMpDqIKEmOaPmfIHeHn0rTY61ulDyUp5oY/KlxwsQQPdMessB4EEiqnapDOxeFxQ6Z6ETzGcHzrS7MbdQBT3feTnutnHipkeEVgnVrR9pb937ycPGtd2VxYu2zAO7vGOjalT6gjx6VOSNNKrDsPs2yrl1tqGJ3ugY6sFPdVjmSQATTSaiqV67dVFLMYAEk0hCTvomDXwmgre01bRWjnu5fOaLt3lb3SDGo4jxGorGaa7RTeE8KptW93IAKOQED4UcVr4bYOVChlOkJcbaIw7tJ3yrlCNQz70HPlvRPKay2NdUQMxyB4cSM4Hp5SJpx2i7TPZdVtKjLDSWkyw3fd3SIAnz6Rnidp371xy93eJPMEADkBoBTxheysE62W4PEe0usYiSTHLvT9Ka4wCI4Hun/cCPnFKtiQp3j99gg+Of0/u5Uz2sd1J/nT/ALx9JqwsuzMYDCbwDfhJny/zRGGtkl1UZsd3IZ5ZZeZio4IEKxBiWPpTnssQ91t1ZKrvKTkCZ7xHqPj0osDY3wtn+HuoOFxCjcvaLLA+YLD0pn7Sl237hW2GKwbbo48mj5E0V/EpzpSQ+0sXSfw8NaovYdXhiCrD3JMBzlEj4Z0Tihu2Lyg97cMcOFUrLIm+RMANpE5fua5s0lyi0Q9EO02B7n3t32i9dzuv8CjeZqvDIHUjTfUEdCGOfl3DQe1cSHvgp3SsshOjZw2XI5SOIbhFG7NuKd06d/dM8PaQqj+5Uz6mulnbHoWYpCEdTkdxo8gcvI/CDxoTs7ttsLcmCyNAdRrlown7wz8c+hGi2vgjBOjKD5giPSMj06gVn+zewbmIujugW7brvlvdIBB3esjyg5655KxrSi+R0vBYy3dQXLbBlYSD+YOYNW3rQdWU6MCPWs9232kuFtLeN0qQYVFgFhGgHGMsj3eelZvsv/6m+2f2WIslTnD2zvLH86mCDwlZk8BSyxvtHIpGzNsrkR6Ax5UVgrRBLERIgTrFEW7it7pnnzHiNQfGg8ftRLZCZtcIkIubEczwVf5mgeJyqVUWeRyVBrsACSQANSdBSPaO1C8pbkKci2hPQch11+dV3va3c7hCjUINB+Z6n0FWW7Kp+dBsaMEtsQY21bt3Ee6hZdx91QAc5XUEgaGm24iI26gyUmCJ3YBlTP8A2/TR5hNnBir3FzU7yg6g/iPXkOGusQBtdQC6iO8GIEjOQZHrNXjFpKyUsnKRhLWGDFG0Ia2cuJkT8z8an2ouRuWxqzbx8BkPiT6UQE3WAnIEegz+QrP3rrXsQXOmqjoMh9D60yLDLCYUOhJyTeO6v4s9T0GkdPCmfYvEIMYyFQVZCoJE96VOU8I+lC3W3VCLrEDoBxP7zqzYKbt4Mv8AwwZPN2IOvPUnxHOsxZ7Rr+21tBgrsIu8dxVgCZLrp8ap2nZT2kC2uQA0FC4vaa4q9aT/AIVpg9wjRrg91BzAmT40y2nhS1yQciAaBFKgvF2fsbhJ+4R4VncVfYlLKt/qK05a8ZnjIWPOn+0VJs3Cfd9m2fCszcR/arcRYgjc6hOA5bxEeEVzuDcotghG5Hza2yGhHA90zP75gmgkUkvaII30IDcATpnz3lU+E0+2rjd62ChmSu74Ez8qETBrathy+9x0hepzzPwEV0HUGbN2kMVYVmA3x3Lg0IeNY/C0T6jhStNsHAo2/vFSV7oEhjMEyPdOQz0IB4lZz7bbFi+blvvo5gqdHBOa5cZ0PONZg6LaWyLd5lv95QU3XVgJE5qLi6ZGROmnkyiTnVUYzaYxOPub91p3tN33Qmfdtg6DqfOTWt7Ldnkw1v27IMjFq3xZ8+8x4xn4QTwFMtjYEXWCMoCLBOm6/KCc948tQJ6U9fBC8TACqhKKMyNBmEyAyI8qaTdaOdVexXYwCgl2ZmdtXBKnwXdMgedWYbC27e+VEb7b7EkkliIJLHM6DXTwij8f7DDoXuvkOBO6P+nPyk1zvtB20Z5WwDbTTfAhz/T+EdT3vCoLFKXbK/Uiukafa237GHydxv8A4eP9oz9YHWs5d7aXSYsIu9wYrvOP6UEgeME9aWdlOzr4x99pS1PefV3biFJ1PNj/AI6rsvY9rDru27ar4Zk9WY5k1WOOMfyJPI5HMMWdpXBvOLzAz7x3V8IYgDWkez+0mLwrixiFd10UOZcToUee8s9T0IrvDoIgiQZBnjOtYHb+yk9oLZAgTcRyJI4ATzkkE8h1p7EW2JtpYpmUsRuqSRP4RPunyjPhPKIWYG6faFoGQUZaHWPlTouty02YIIg8e8vH5elIsFbh3y7k5Dnxjwz+dKdbYc9+4QdwSx1Y6eA5/IUbsS27Wzbe4VRWYHcHfJaGILHhn45mhbuIjoeXH04Cmey8KyIQ+8rMxdhJGoAEjnAFKxJMaWSqAKohRoBV/tupoL2ani39x/Op+xXm39xoCGm29e/+3vKP/wAZPlyoPHBPY2wpzBQg+ABHypHta/cup/WoyExB6cwGAmg8TtA28EhGbCEHipI+SmlhHikikMfEa7LtFr9xAN5UckDqcwD0G98qt7RWbihbqMWa3cQm2B3TmIA4sZjPTXlNNdk7NTDod6Ddcy7Cc2PCT90aAZac6HxN3ePQaeB4+J+XiaMbcqQJ5K2JrezFe8cTdRBcPuIgG5bHSAN65nm58oFGveIMA6CW00PAzz5dK9ibu6s6ngKy21NqDcZQwEE+0uaweQg95o4DIcToB0xj4ccpPv0MxHam7bJs22RgT3gqzmToWPSB5VO325bD4dkANy+Xcsze6JYhfHICPKse90RCDdXr7x6sedDYh1Az9OdNLi9JCwjJbkwvG7YuYh9+7cLNyOg8BpU9iYBsXfWynu6u3JRrHU6f4ofD7KuXAGZQicz7x8Fy+NdE/wDTfYy2jduCZJVJJzlRvHTIe+o8qVuuipr9n4RLNsIqgBQAANABwqwsWCcCST6TnVmLaSFGp+tTtKCxPADdHlUwEGEisPtphcu3FHAKCeMAvl4EsZ8K6AUGtYfGKn8Q/X5bzZ+oHrQfRTErkYh0NlXzMEGRyPOrcJbcqN0BRGZIk+Q/P0pvi8Jv3I+6BmeGRIz9KkWQDdQZ8zw6mks6WUdmsGTjLahi3vkzpO42cDKf0rbY/YIMvvwx6ZUi7MIqYjfIJARwDxLFkz8IJz4zW1VwJVmyPeE8uVZ7ITezCMCpIPhXyehrU7VbDMO+W3RmSunypKEs8HkHOZpOaBf2LcSiojMTpkP6VJM+oNZw4U3MStsg+xDoXbQTAkA+umm9Vtr22IH2ncUnzI1jpJpjd2ejJuFmiIyaPlFOtHUaXGX9U3SBnM8QBJy5HSetJ3fieNW7Ha/cD23ZHVVhXPvZ8DGsRrl4ng0sWrVshG3d5wQAxEvAkgTrlnA4VoyUVXpyzi2zn/aXbFv2ZtglmJA7pIgA6Ejmf3wrJM4ZeSwQBwApj2x2K+DxRCgtbunft850KdSsgeG7Udm9n2uP9r3Qq7xQa/yhjwJ5axyroi7Vok6TFaNcuBjbWQolnOSrlpPPpWm2VsG3bh377xJLaA5aDpzphi8KlxEtoAiAe6ogQRyplhrHE6UXVC27KmwoKjLVlGQ65/Ca1fZhQFuHT7Qn/oQcPCkWIWSggRvT6KadbHaLTxxcqPPdFIxkMsLLMz89PE/kPnR6LAioWbe6AOXzq6lMAbUxQt2yT+vh4nSsJtDDuHF2e8ZmOuceUZeArV9pfd6CD6GfnFAnDh1k8NPEj5ESKnN0dOBKrMEce9wlUJ7x7x4SOGWfpSftLhbgtf6h3RBYDIEEgQQNR3tDyrSLgxbZgODtHONf/MDyNLe0LL7C5JAmAOpDAwOuvpRi9jT6Zf2f2ri7lsXFKnIISw4rqdeI3TTNNrYs5lrR8R/8q5ps/HvZuB1JjiOBHUVvEuK6h10YSK04L0gnY1u3cZei2SgB13Rw48aQ4sOjsq5gHXP86d4HFC2jFfeYQOg4n5UC5z0rnWH5OkZrY6vuqgDvqTp75+sV7ZGzzfb7R7jIwMCd0CIzygke98Ke7X2NZS2zKsuR7zMT8zFQ2e4W57MHRZPOd9PLpTZMjjJRXpSWW2khyiABVICkCFjIZcB5cKs3Z94DIyD9ehr67gCTQ7OW105UlhSsz/bPEAIgABKsWBOegg58u8Kz2C7qkfeJlidSTrTDtNig10oNFUKfE94/+PpSpDXZj1FI5pr5WMMHakxwHypnlEcKAtvuivHFRTgLi+azqCwPp9dafdn87bHWLhgfzZR+flWTxV6CrjSc/l9a2nZhFNhGA13mPVixX4BY9KDMh0ogVOvVB2gE0oRB2lxA3HA13SvmcqQ4faotW9y/O6RCXBpPBX/C3XSidtXxEnTe+hM+GVKdo21uEgHdAGmoM8+BqcuzqxajYmx+Pi65jNgAAM8x9c19KRbe2e1217QtG4rOonKAJM9SAc6a/wAP7O4CwiAQhGkmNDy6fpRWJsG4BaXV8vBRmT6CsmM1ejnCZ/TrWp7KbWVItXfcbQn7rfkaq7Q7Da2UdFjeB3gIEMv7NKTZcaqevQ+VWtSRzuLizpN2wB7pkVV7MVHsZilxFso579uARzXg30P61o//AKbb61J60MnY82zeU23BnIcM8/DjSfZK/bKSQSbYJ/8A2LHyr7tS4QX1hl854V8weIVb8SZCKIjLNlMz4T6VxN1JL8k12h/iTmKDxuKFu29xtFBPjyHmYFFXz3qXbQwn8SrWFJEwWcaLBBE88xpx5iJFIq2dPUTDlyxLNmzEsT1OZq6whMkcBNarF9jQEHsnJYDMPEN5gZH95Vnjba0+5dUo3I/Q6EdRlXcjjI79UYiR4fI/lUkGo5Ej0q9BIg/sUTCtnYdQeH7410fsapGDtltSXPlvtHwiufXbJU9K6Z2dWMLZ/oU+on60rCM6HuGQeogeHOvXrozHAa/lVBDOeQ6/M9eS+vKgYwnaHEHfFpeFwSfEMI+NKC923c3UgrugyddYIyrRdptnlXeOMOpP4lIbM+IrJbb2ibIS7Ey+4V47u6SwP/TStWVxzr8Bd1LjAh4z5CR8M/hXzZmIdHIujTd3W1yzBE+Z1+lVWO0Fm4BulZ6Hvehg1Xf2iraB2PQT8Z+tKdFl20cSHfoGWPPL6n0pXt/ZqvZNxR37czGpA4emY8q+vafNgrkGImMoM8zlRJxYlx+JdD+JY+Y+VFCtWZvs9tJrV9LiGDO6wI1DcCD1Arp6bfEZoVPKfl0rH4HZC3reQzXiPeWPvA8Dx60+wO1Le5u3gu+hKGY+6YBHQjMdDRbsnxoc7V2gHkAAQgJAOR3eR9Mqu2I2+S+792S3DfJXLyBojtDsa1cO+mTEEndORP0NFWzaGHRLYKjdAA6GCxJ5mK4Y4pKTlJ6W/wAkSqw5JKLnJhB9Og4+E8q0GDwwtrA11J5nn++lLNg2gxa5wB3F8o3j8h5HnTyuvGtX9xpSbVH2lmNwVvEjdcSgOXAlhyYZgcMtc+GtuMunJBMn3o+6vFvoP0otAAABpGUcqqIYzafZe4twvh90oQDuFoYEfhJyI01NKLtl0aHUo3JhHpzHUV0e/MSNRnUHt27qQyhlPBhP7NGzHN7ziMwa2uxMUowlkLruKo6buX0pZtPseCd607BeKE/JyCfIz4ircDs5bSbii7lJa2XIbPUoyQYmTAPExOlZsyQ6sgcTJ6ZwenM9TRSTEBYHWgEVWVSlwpwEneUnl3s56SDV4e4vvAHw+k/WgYq2phd4BtSK5L272olu+tp7SXECbxVgQ0txV1IZTA4ZZ5gxXXztC3Gp8IM1wnt3iZ2jfgDclIRhMfZpmOKnwIopbCnQvZMA3enE2W1j7O4oPRhuP8KZ4XaloAKMUrnhvW3tnzmVnqDWcd0E/ZjP+Z/h3p+NVOCw7hC9AI+Op8yaLjY6m10bm3jrZEShI/BcRj5qM/hRFvZ167yVTzkn0kRXOrLvbYMpgjj++FbTZPay3uRcZrZ4gqXQ+BXvDzmklBropDIn2PsBaOGkTvAtJ1DDyOooZ8eVZo0JnXoB9Ks/izdA3bZIIkNvCPEKRPyqL7FYmSDPh+lIWN5jcDcUqyusf0nPoc6QNi2Ki2vdALqW5QxED0qFvb11j7O/IY5K6kBSeRygMfjVW5JKzugOZyg8OFR4qmknRyvG09j7Y2JeypUlShzGcFchx5ZTn189JZxCwSTHSSSBHGc65/d2kquqWyDnLd0elNMSLiSEOQbJek5qOhE5HLwq2NtraoEkajBvJLH3nz8FHur6Z+JNHAUqt4q25Ps2BZSTGhjXQ8M4phZvBh14iqCstoK0CrlfMdR+f5UXMa/vpVOJtEgFfeXMdeY8/wAqwC9TNfGQHUVQtyQGGnyNXK4PjWMBYnDQSygENk6kSCOZHHqPPnMsO8CJJXSDmV6TxXrRxoC+wR14BzAPDe1jzAPpWMQxtgQWAE8TxI6npXAO01zfx2Jb/mEf2AL/AONfoa4ZEV+d+0KbuLxA/wCbc/7jTRMK7lXYFJBMmJA9Z/I1Q9Tw17dyOlMYNNsHXPxobEYVQJGVXLcLaDzNSFrOSZrBHfYm+bjNb9pulAN2eIJjPkBkJz95fPTbQxF60+6be9kCG3zmP7Oc1hNn3VsXkvcFJBX8W8CCPCDMV1XD4k7qm3dQoQCu8cwDw1qM1TLwm6Kf4NblsCNQVg814eY3T5UAlwqTavEyvu3PvbvANzHXhWgsW4DHQyr+Yyb5RQvaLCB0W4IDKd1jwKtp8YHmak5JdnTKuIuTA2Vabe+zDXezEkdB14U8Vw0kc6RYHCAKXuOQiT3ZOXETzGvjReAvSiXF91h8junzkGt+nUk25O0+jikqD71neHEHgwMEHmCMwaGs7dv2m3bo9pu/fGTEc+R9B40aCCJFDYvD74y94aH6HpXTQg9wPaPD3Rus4UnLdfKemeR8iaY+0ZNJdOmbj/8AofHxrAJhUuAqRusNf8VSEv2c7dxgBwGY/tMj0oUA6EHU99CGU+8B8THz/wA164ojXunRhqPH86wS9orgMuhDcWtsVPmpkE+Yoix2oIn7RwDqGWfPIGPlQMbhcTundfybga+Y/Di4jIdGGR5EZgjwIBrIL2hyj2iRybd+RiK+Lt51926keKkfE1jGhwOJZl3H99dT+IaT48D+tcI7RvvYvEH/AJ1z4OR9K6JjtuxvP7TebMwnHLMCMs4HSa5hj7u+28RusR3lP4hx8DTRCCOwqMivoTeImrXw68MvCmMXW7sjUDy+tEpbBBJeANBxY8hHDmaCS0Y59KktwzP+PCKwUFqg5U92XtP2dsJGhMeFI7ThhRuE2f7Zd4M4glTERI/Qig0hkdZwN0OrEaB3X1IP1qzFWwbZDCRAmehFK9l313GCCF9oq56mUOZ65CmeM/0iOcL/AHED61xraO6G4IzGPa0VKgtuqc0UmQAY14iSPSjtj7vs90SIMgHWG/UH1oHYuz0Fxw53tFY9SZjxO78DTs2EUghYMbsjiMjpzyNSx5FGajb3+xxPw+wV0qxWBqQXLTzqp7cZivRFaKsRZzDr7w/6hyP519WGE8Dz18PGpe0PGvdR5/vnWJinFWBvbpHCR4cfMZeooa5ssESpinl5Aw+R60IjwYNYwk/gmBiQDwnKfDrVV6w66j9+OlaO7ZDDMSKGKEZHMddf1/etYxmbgoHE4dXEMs/P1rUX8GjZgR4Uvv4Mj7oYcxr6VgmIxOH9m8cNQelRdxoM6ebcwwNveAzQz1g5H6HyrO2GknKKKMG4cVN7QNQsvkTyq9awyF7vu60bs2/c3O626JPD9+HlQu1LY3d7lTTFYG/h29k9uSoyIBII4EGNKDGR0i2o3EFs5C4rNORmIjxh1Prypjj3ytpzcE+C5/PdpRg8faL+zKMzlwQwPdBBB08ifMUbZvi5iGUaW4Hnx+OXlXDBNad/9O3A1VFOPwSn7NXCkt7RuZYjIRrAHLnUcLh7lu6qXGJGuZkEbpIIPjlUNqY9ExAUpvruITu+8rGTI6wRINT27jZW0bcsd4xGR4HQ6ZxlUItrKm1p9HJJ3I1K2hFL8RZZT0NU7K2gxCo/dPCeQ5cxmB+wS4N5IIYA9NfSvTTBJCRo5VUzgUfijbMbojnQT2gaYkyv2oqnFWt4bw8/zqT2iKirEUQFOGux3TVzwaoxCfeXT5fpVKXKBiy5b5UO451cXqJccaxhVj8GGBy11HMVnMT2bGbW2g/hbT+7X1mtncTlQBEEyI+VYJgbtq5aIt3EKGZz49QRkR4UYjiNa0HafD79iYk22DDnB7rDwzU/7azeG2dfue5advBT89KNjIhelyAOJgeJrusVy/YnZPEm4j3LRRFIMMQCSM9JmK6D7TE/gX9+dRm02UiD2tjeyChGYswL733RkRJHOTkDyPKqdi+2ffO7vOFCISApO6W1I4A8elNrNvEOo9lCCZLNBH7HAUfhtnnDqWDFiZLSBB4mI0NeZjc6t9jKVUKdobWs3LRX2feiBpKkddcq+dl9kK4N24JnJR8zWQvXWuX3ZSQu8T5TpWis7WfD2GZREghZnInjXRhxSg3vT/gXi0AdscWovBLfdCax+IT8Z3vHKp7P2i11Fbe8JOh/Cf3y0rJXnLDMyWiT8/hV2FxnszGqkd4eGh8q646DJaOh4bFq3dYQw151aLO97p8Z4Uiw2MDEKW70Ao44g6Cefz8ab4XaJUxcHgw0P61Ugyb4Vxw9KEdQabfxqEa+RpTeeSTWADOhGlC3bPFfT8vyo0mq2FYwAtznXmNEX7AboeYqoYUDiTWMeXShbmtFuYFBOaIT5ZbddSNJEj8q2q1z/FY1LYDvmsjIanPOnOD7aYVzDFk6kSPVfyqM0UxmqFfZpdZ2zhmyW/bM8A6z6TR29UyoZhsTaRVQXBlmDORBM+HGrsZj0CMCZhSSR4cKWJsSyigSxjLWD8qRbZwhtsACYfPPkOdeXGOTlr3+ifGXY27PYbDWVe4WDA94MwAy4jxrH7f2x/EXGIyQAhBw1GfoDQ+1dolZsqSRkWI0zGn5+XWlL3Y01r1kqHrdn1GmOgFQOp9KjbcAkc9Kgl8S3ic/h9KcDCsBtD2T7lz3DEH8JnLy18K1OGx2W7czB0fgeW9yMcaxN0Akg1PBbSa19m8lDpzXw6dP8UUyclZ0AORpmP3oeNe9uOvoaS2d1hvWnyOYg5H0q4Yll99T4qSR6E05MaF6re6BqQPE0CuKRtCD04+hr418DkKxgtr46nyNUvilGtA3MZyqlsTWMGXr9BXr4Ak0HiMaFoEXm3gz6QY5D9etawgW3sUWAGhJ05AfrFK0YipYu97S4SNJgeFTezEUjKItWnuC7S4i2gQPkNN7MgcppFZaKJBXlQYyZ2+4e8aSdov9Qf0j5V6vVx4v8i0/DAbQ/wBa5/W3/caDTVq9Xq7CaKr1Qt+7Xq9WMyFzhVd73RXq9WEYf2Yc71wSY3JjrIz8a2I0HgPkK9XqZE5dgmNQbpyGp+ZpBbczqa9XqIA0VVd0r1erAFd/3j4V82n/AKZ8q9XqHg3opw3vUde0r1epRypalXq9WCj/2Q=='
        });
        return i
      })()
    },
    {
      title: 'Названиеуууууу Немного Длиннее Обычного',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://damion.club/uploads/posts/2022-03/1646427410_4-damion-club-p-anime-devochka-s-kosichkami-art-4.jpg'
        });
        return i
      })()
    },
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://avatars.dzeninfra.ru/get-zen_doc/1911932/pub_5d6370bcac412400aeb2c040_5d884d0d6d29c100adddaf85/scale_1200'
        });
        return i
      })()
    },
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://cdn.imgbin.com/2/13/21/imgbin-anime-kawaii-mangaka-chibi-computer-icons-anime-FAHXbDEfcDXQ3JiEMe6EMkGCa.jpg'
        });
        return i
      })()
    },
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://i.pinimg.com/originals/d7/1b/02/d71b02cd02ff3bda2d76e8f232356c76.jpg'
        });
        return i
      })()
    },
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://i.pinimg.com/474x/6e/f7/3e/6ef73e3a7f310e4e5351c739153a8fd8.jpg'
        });
        return i
      })()
    },
    {
      title: 'Название',
      description: 'Описание',
      image: (() => {
        const i = createElement('img', {
          src: 'https://i.pinimg.com/236x/fc/0c/d7/fc0cd70b7d2522bc382a38e776871956.jpg'
        });
        return i
      })()
    },
  ]

  return (
    <div className="App">
      <Header count={wishListData.length}/>
      <WishList list={wishListData}/>
    </div>
  );
}

export default App;
