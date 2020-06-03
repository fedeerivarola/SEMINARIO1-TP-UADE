import React from 'react'
import './Childrens.css'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Card, CardActionArea, AppBar, Tabs, Tab, List, ListItem, ListItemIcon, Checkbox, ListItemText, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

class Childrens extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.userCh,
            padre: props.padreCh,
            hijos: props.hijosCh,
            loading: false,
            view: 'ALIMENTOS',
            selectedHijo: null
        }

        this.submitHijo = this.submitHijo.bind(this);
        this.handleSelectedHijo = this.handleSelectedHijo.bind(this);
    }

    componentDidMount() {

    }

    submitHijo = (e) => {
        console.log(e)
    }

    handleChange = (event, newValue) => {
        console.log(newValue);
        this.setState({ view: newValue });
    }

    handleSelectedHijo = (value) => {

        alert(`test: selecciono a ${value.nombre}`)
        this.setState({ selectedHijo: value });
    }

    renderOpciones() {
        let opciones = [{ id: 0, desc: 'Saludables' }, { id: 1, desc: 'Diabeticos' }, { id: 2, desc: 'Sin TACC' }, { id: 3, desc: 'Proteicos' }]
        if (this.state.view === 'ALIMENTOS') {
            return (
                <div>
                    <div className="OpcAlimentos">
                        <List>
                            {opciones.map((value) => {
                                const labelId = `checkbox-${value.id}`;
                                let check = true;

                                return (
                                    // <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                    <ListItem key={value.id} role={undefined} dense button>
                                        <ListItemIcon onClick={() => { check === true ? check = false : check = true }}>
                                            <Checkbox
                                                edge="start"
                                                checked={check}
                                                tabIndex={-1}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value.desc}`} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                    <div className="RadioAlimentos">
                        <RadioGroup className="RadioGroupAlimentos">
                            <FormControlLabel value="Permitir" control={<Radio />} label="Permitir seleccion" />
                            <FormControlLabel value="Restringir" control={<Radio />} label="Restringir seleccion" />
                        </RadioGroup>
                    </div>
                </div>
            );
        }
        if (this.state.view === 'LOCALES') {
            return <div>LOCALES</div>
        }
        if (this.state.view === 'LIMITES') {
            return <div>LIMITES</div>
        }
        if (this.state.view === 'PERFIL') {
            return null
        }

    }


    renderMenu() {

        if (this.state.view === 'ALIMENTOS') {
            let alimentos = [{ desc: 'Banana', img: "https://www.stock.com.py/images/thumbs/0167518.jpeg" },
            { desc: 'Alfajor', img: "https://lh5.googleusercontent.com/proxy/Hcy9n1Rq0yhuutKGAYp_nbbXKr4sWUTEXWSOPbJlvMZwKFGW6ndFnLOxqXzsJ9JLQFjan_rGD8bImjem4Rn6EUudIRePNgWZgnv3xu09p6Wlt3ocNkbB4zFu_HrHfQ7S7U0ko9srJKA" },
            { desc: 'Sandiwch J&Q', img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEBIVFRUVFRUWEhIXFhYVGBcXFRUWFhYVFRcYHSggGholHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslICUtLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL4BCQMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADoQAAIBAgQEBAQFAgQHAAAAAAABAgMRBBIhMQVBUWEGcYGREyIyQlKhscHRI2IVFjPwBzRDcrLh8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAuEQACAgEEAQMCBQUBAQAAAAAAAQIRAwQSITFBEzJRIoFCYXGRsQUUocHRUiP/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwDXOuqI3ImmYdWP4l7ojfH5ROyXwZ+Iuq9xvj8ja/gypLqTaIpmSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGwCjiOKQjonmfRfycmXW44cLl/kdMNLOXL4OfU4tUb0yxXTdnDPX5G+KR1R0mNLm2RvHz/GzF6vK/wARdaeHwaKtJ/c/dmfqzflltkV4Dm3u37lXOT8ikjXKuZH6k2/BiVOIaQUpGvwytFtwVLpoSl8Dd8m8a1SO05e9/wBTSObLHqTKuGOXaRYhxSqt7P0OiOvyx75MpaXG+ixT42vug/NanRD+pL8Uf2MZaJ/hZbocUpS0UrPo9DphrMM+n+5jPS5Y+C2mdRzmQAAAAAAAAAAAAAAAAAAAAAAAAAAVsbjY0leW/KPNmGfUQwxuRthwyyukcDFcQnU3dl+FfueNm1U8vfC+D1Menhj65ZUc+hyORskZUxYoQbIthpFiEi6kZNEyasWTRnyYsiLRPJnKieCLZhdyLJNvIm/ggxluOxdGXBEsix8JWFE7nZA8OV2mnqGIOcPplJepeOScPa2S9k+0i3R4tUW9peejOqGvyx75OeWkxvrgv0OMQf1Xj56r3O3Hr8cuJcHNPRzXt5OhGSeqd0dqafKOVprsySQAAAAAAAAAAAAAAAAAAACHF4hU4OT5bLq+SMs2VYoOTNMWN5JKKPI168pycpPV/l2R85kySyS3SPdhjjCO1EepkX4MWKA2dyW2RwSUY9SYorJlmES6Ri2Zcbk1ZF0SQgWUSrkbtAoauxFluTDkQ5WTRiMwpBxJFVRbciu1mcxNkULEg1lLsLLJGuhHBPJBKn0I/Q0UjahWnTd4v05P0NcWaeN3FkThDIqkd7A4+NTTaXOP8HtafUxyqvJ5mbTyx8+C4dJzgAAAAAAAAAAAAAAAAAHC41WblZbR/U8XXZXLJt8I9PSQSjfycdwPNfB32YaKkmGVJN4lkijJoQZoolG0TRjYvVGTdm0ESkQyVWJopyaVGZstFESkUsvRpFEJFmJsMJBTFiiRTLJlWjeNQspFXEw5ixtMOaG4mmJIkIhqOwbo0irI5Sfl0a/YbmuUWSR2uDcTcv6dR/N9svxLv3PY0er9T6J9/wAnnarTbPqj1/B1z0DhAAAAAAAAAAAAAAAAB53E6yb7s+eyu5tnrY+IpHPqLVnIzqi+DXL1IomxTSbJik2RJtErjY19Mz3kkC6iVbRJEnYVbM3QocmLlWSZk0VYSI5SKPkskR/EKltpiVQhkqJomVLUSRLIozZyLWRRi4JozAIhifZhhEM6hXcaKJG53/kbi1UYwtOd7rWz0aL4993Eico1TPY4Oo5QWb6ran0uCbnBOXZ4WWKjJ10TGpmAAAAAAAAAAAAADEtiH0SuzztZnz0ketEgVK5lss03UbKjra3qWWMrvIcbUhSSvu3ZLn3NVBRXJnvcuidxUoxlFqztr25nQoprgy3NM0VanGeRyu3r0Svsn3IqClRNyassVY25b39LbEuKRCkVaU1JXTXR+fQy2Jmm5okyaFJQJUjRso4miZCjPYX3GlWRSSLxZG6hmy5vGRNEG8ZCiGiVImihHJkFkFMWKNZVCtkqJXqSK2aJcGk5aa82SiT0PC45accy11aXM9fSxqCs8zUSubot4Ktadn92vkduCVSr5OXJG438HSOw5wAAAAAAAAAAAAAADzuOjkk0/TyPDz43GbTPVxSUopoUJJlYoSJMRiFCOm5skkjGm2edx3E4xV6mrvp6lJSNVE6VLHJ0o2S25beRqpfSUcOTaGAjUaqK26cvNdSNibshya4L86N27vTs9yziUTKNLK5NxSjrZJ82t9DNNeC7uuTbDYjJBqSu43dvNvURdLkhq3wSVZKUc0barRbEtJq0E2uCDeUo9rr+L9Su1N0X3NFedO+7t1W9vM55Yr8m0chVkrXd9rfmYvG0aqaN6dyNjJ3osR7hRFk9/lLNcFF2RtmbLmLf+ytE2VKlbXQzb5NEuDWPkQibL/DsOpS+ZaLU69Nj3T56OfPk2x4OvbR258+x6qR51jDQTqKSe1l7Foe9MS9tHYPQOQAAAAAAAAAAAAAAA8/4prUEoyqSeaD+WEXrK/J2OXUYoTpvtHbpY5eorhnj48cnB6JtP8jienkl2dzg/go4rxXUu3CnKb2cWml6MiOOV8kelxwiCrxadVfPhasH1jZr8y7xMLFP4JeEYuspKGVpSf1SVrdmRsaJeGXweqweIVOMkppyk81lJPtbyMXkUeEZvFK7aJMJiJys8yTu83pyIjJvmysofkdDDxSd5OL5xl3NIyVmcouitj6DquyeW0k0193W66ESW4hcEdPhaSaz3m225Xutei6E7BuM4iXw1FTlq7L/AOESe3hsJX0crA0ZfFcs7abblp7RsYRi912atrbRdq087atZtWb6W2LOLkyE6RHTTgnmebKnr1ttcJUuSbvo6NGlGUYu9rpb9Wi3ppqyN7TNalO2hnLGaRmQz09TGUaNEzZRdiji6JvkpSoO3qYOLNdxLRo8iyiQ5HawULaHraaG2J52aW5k1SSV+WmnmdJkk2b8Khp8zV97dzTDjrljNa4SOodhyAAAAAAAAAAAAAAqcSxGSDa3ei/krN0jfT498+ejx88I5PVXk9Uv1bMG6PZTS/Q5OMqVY3+Fhvid7ae7MW2zqUMaXMqOdLieNj/0KUPODf6Mcl/Sxy8/5NaPiHGp2lRo1F0jeLG5h6aHhss8f4nThFObUXJfTfa/Iq2WxQaPAYurVcs1CNVdGlJL0JWKL7RTLz0dTheI4rLRQvHm5Xj+bMZ6TE+rMNsvyOvDi+NoK9WKaT+lPU53pWvay3pWuUdPCeMaFRWm3CfXb0ZnKGSPaMJYkmemwnG46bJW3bXo78yy1FcGEtOy38WnUik2pW3d+YWWL4KPHKIeEv8ANB2lb6eXuXteDPoPBNu7drrVd/MtRFkTptKy21Ulzv1uR4okzRacVG/PTTbsFTVEvuyejKLTTjla+nW933NFVFLdm+KccqumtN+/QyyRVF4N2aUKd0zNQtGjkHR1M3jLKfBvCiTDFbKymW6crRzO19ND0oLg5WrdHl+LYlV5xUZSUYX2+XW/57Giiejgx+mra5L2Cr5dLs0E42em4XXck09bbM2xvweVqMai7ReNDmAAAAAAAAAAAAPMeIsbUtekk9bRT/NnJmyS/CexocOPqbODhHXpQq1cRNPMtIpa+SMrcY3I75LHOUYQXR5rD1OIVamaNWVKK+mKsopd77lVNvo6JY8S9yTPT0eMKCy4qdKb6rSXrbQn1K7OWWnT5x2v4J6bwda7i9VvZar2J3QZTdqYcHKxdbB0JOdKg61T8UldLyuZvLCPtOhYs+VfW6X5FCHj6rGovi4aHwr62+pLquT8iY5fkif9PjX0t2eyq1YThGcNYySlF9maNnFjUlKn2eP8SYuMVrbXYpZ6mOLrk8rT8HYnFyzRg6VN/fJWb8ka8HNllBumzu0/AkqcMrrVH6mMscZO2hB4/BRxLr4T6Z54rrvY55aOEui7x8cFzC/8Q1CSjVuk/uey8yn9rlStcnNkhFdnqeEeN6FeLySUsv1a2sVlOePicTm9GMvazt4biFCTvdKT3uTDLB/qUlhmiz8ubkuhraszp0Q4um+VtiJX4JjRyMbxCrqlGLy6abtdUZSnJmsYJClxhxfzQlFdWv1K72u0W2JnRp46Lad9OvK/Qncm0VcXVF2UFKN07pnRjgmrRi206KHEcVBr4SV7q909Fr+uh1QXBthxtPeV6WFXI3SNnMtYTAubeTVLRvkmSlfRnkzKHuPSYHCqnG275s1jGjy82X1JWWCxkAAAAAAAAAAAAVa2BjJ327Gbxpm0c8oqjm4jAqbcb3a2b7HBkfLgnydePUOC3IpVfD0H9dSWX8Kdv0OaUJP3T4N1r5fhiQw4Vg4Oyo3fWSdvc5nkwxdJN/rZf1tRJXur9DaXDKUk3Cn8Oa2a5+pEWpW4pxaCz5INW9yZ52pj6ankr021t8WK/wDJE6fX458ZP3O97lzB/Zk/+EYeqrwlB372/I9CKxy5i0VWqyR4kiLiPEYYenDD05XlFa2Taim9tCzaSUbJxweSbyNFOhF2z0KEalblVqvSPlElce1GuTn3SpfCOZjFxRTzyrVU90o2UV2UbWsVcprsmOLTyVKj1fDcfOthlOtHLUTcamlk2vuS5XLbrjZyPEseXaujw3iXHupJwoxzPZy+1eog7OxxaR5efhurJ3k7s33JHLLC32X+F+B61V6fLH7pNtJLuQ5WYywQj2em4Xw3BKapf4k5TWiWa0b7WTe5zywRl4LKUor2nZxUK+DXy1HUju1P6kuzMHp9vReMYZVaKdDxpSk1nqZXJuNvwtc30RX0cnZjLGlwVqvHbVZwpVoT1jeb21V7RfNk+i0VUW/B6LB17pfF+p8jN8dkON9HS/xGjSTc7fKlKMfxSfTrY1hRX0Zz4iT1uJp5FCOaLjmbTtr0sdEIkR0753cMr4TDJLTzOhKjaUixSg6mkNI85deyOLLqHk+jG+Pn/hWTWLmXZ1+H0IUvljo+a/ktgrE6T5ODPOWXlnXPVRwgkAAAAAAAAAAAAGGAcPjFSVNJQd7p7paa20aseXrY7Ka8nbpUpN2eTxlCo1bNLe+7ueNKB6ikb0sXXzw+ZqKspLe66u4Tla5IcYtdHpMXxGEI3lG6fRr8zqyZIxXMf2OOGGUnwyGlVw9aN4JSXRLX2MXDTzXtL3mg+yhiMLhYu7hJPqkc3qafFLjcjpjPO12ipbDRd40qkvWxZf1DEurZf/7NdpF7C0aNaMssJ05R5N/mjpx6pZk9jaaMpZMuNrc00eX4nx/EUJZKTVVJ6qUbr3Wpnp9dl/G+DbJCL5S5KsvFtWUf6mFio3+mMmr9b3Op6xN1wMcXHnmxDxdQgv8Ak7eSR0Q1EOqL/U+5s9AsRUcYzhhE1JJq2VuzV1e7Nlkb6QrH5myvjeGyxCtiXVpw5wVSFOPqoasv+pCnCPtVv7s5svCHDtszXlVuRcfkt6mT4/wdLjXDKuJioUppU1FJtO85Jab8iPc+CMc4Y093bPOvwHFcmi1mqnj8G9DwTFNaN229CLJcoI9TDhlo3xFXT+9qK9LEOCfZyvJFP6EXsLgqFRf05Qnbo0yyhHwZyz5I9qixHBqP0qxokkV9Zvs2VDO8q+n7rc+3kcOoyeo9kXx5/wCEOexW+y9iqyo03kSzW+VPZd2KUI/ScfM5fUa8HqSn9as93/voRhUpS5Gaox4PQI9pKkeeCQAAAAAAAAAAAAaTAONxOtG6T7r3tr7pe5yaqG6H6HRglUihKkn0Z5TgjuUyKVJbWKOC6LqTIXw7Po9ivo2W9SiahweMHeOjXTQvHTVyZyzF1TaWyku6/c0eNeVZlf2C+C0nKOW+xn/a4XztJ9TIumTOFO1s6SfvYPTR2uN9lfUnd0UauCw1sqy69FdmD0WBKjaOoy9sxDhtJq2XMkucSy00Krv7FnqJkNfw5hp6fDjfsHpYeP5C1M12Rz4HSirZai0S+WTS022ZT09n/o1Wok32ir/l+hypym+kqsiNzfVv7l/XmvNfYr1+G14L+hhaEO7Wd/mQ5ZI/g/2R6ql3P/RSw2IxUJpYilGUG0m4wySjfS6cdyI6pJ000XUXX0ssca4xUwc8t3UT2jvK3qdMNXOORwl0vJKWPJBSqn+Qp8XqYhf0Kqpvo4JP0udH9zudRki8MeJcyTZx+I+GMRUeapJ1H1cr+y5EuOU6oZ8C4XBpwzw/XpVIzppxkmrNfmn1RVeon0WyZMMoNN2j6HWvP5V2zP8AZF9Rlcvoj9zxI1D6n9izCGVWjvt5FYR2ql2YSludsixuEvbM7rbvc2lDjkzU+eDo8MguXLQ6dPFN38GOVs6B2mAAAAAAAAAAAAAANZIA4fGuGOotDOUbLxlR4rE4bEYeV6bdvwvY48mnT6OqOU0w3imUZWrxyrrb9zmlikjZSTO1h+OU5axkmuzOdyp8mm2zrU8dCUbqS8jpjOLXZzyg0+jWlTzfPGVuS8iFG+UxdcMpcQrZJxvtt21Ibp8llyiPHYWV0szT7dOolF2IyOnw6mlo7OVt7a2LKKKykzoKG7W3Qts+Cu40dK72KvESpmvwumhm8bL7kRzpu/L1X7mcoPyWUkQOrONvllrf6dUkubuZ/Uui9RZhY++6j5tZf1G+XlIj014s5GIwlRyco0qdS7vnk7t+xxPBO22r+51LLGkrogqV68VpRhDvkujOUskOoL9jRKMvxP8AchlisYtVlku0S0dXljyrJ9OBd4XxecpKFaFr6Zo/ujTH/UnJqMmZ5NPSuJ6WMFHRbv8A3c9HiHC7PPcnLl9Ek4ZXFLu318zeMGqM912QY5ZpQ10Tb8/M0ny0RHhM6XDo2h5t+19DtwRqBhkdstGxmAAAAAAAAAAAAAAAayiAUsThFLdFWiyZweI+Hac94lHBF1No8pxHwZZ5qd0+sXYxnhTNo5TlVMPiqP8Ael139zknpIvo3jmOhgPFDhaNWMo9+Ri8WSPRfdFno8FxqlW+6L6X3KrI1xIh414LsZwel79+xpGcWZuLN8G1BNQW10ru8nz36F4tJcFZJ+SL49X4loyV92nordSLlu4JpVyVKTfxrzcsybs82kr9F0KL3Wyzarg7GDrT1U7X5a6eRqk/Jm68EirXdmrFSUJLnczcS6kRyindSSlfk9jNr5Lp/BQrcMp7xg00rJRk42T6W5mEoJdI1jL5GCw9SD+atKcbaRmk2n/3ER3LyJV8F6MVa+W7520Zbau6KNvqzZwhvl17rUh4sa+prkhSm+LLlGSstNXuzqx135ZhNMhoSblK/v17nTDsrLo1nZy7q1l3JrdJIi6R16GiS6Kx6S4VHKyYkgAAAAAAAAAAAAAAAAGGgCOdIgkq1cMRRNlHEYFPdENEpnHxnAYS+0o4Iups8/jfCiTvC6fVaGUsSfZpHIyh8LFUXpJzX4Zfyc0tLHwbLMWMP4mlD/Ug4tPRrX8zB4Jx6NN0Weh4fx+nVaacW7drrsU9SSf1IhwVcHVpKk3dpKX4uaNoyizOUZIxXweZWi2v7lrYlxvohOuzerTuvm369bcxJWE6M0Fa9vYiiSeMbkULMumUcCykQSjcwas1TMwdgriQ1ZtGjd3I2WyHOkRcS4nChG9TmvlXV9Edf0xXJlTk+DbAYhOLm+drLp2NMb4bKzVOitg8aqlS8Nlez892deKNcmM/g9BhzpRiy0iSDIAAAAAAAAAAAAAAAAAABhoAjlSIBBUw5FE2VKuFIotZSr4NPdENEpnLxfBoS5FXFF1JnAxvhVXzQ0fJrRmUsSZdZKKbni6D+pzS5S/k5p6VeODZZS5hPFltKqlB9d17nO8WSPXJpcWegwXF1NfLJST53uyI5X0yHBdosxr9C6kiNpcoVy6ZRotN9A0QiOSMpRLpiMSu0luizTgram2OHgxk+Th+JMNGTpyk0owu3d2WnUnNG6L4n2ceri5Yj+lQTjS+6ezn2XSP6m+PF8lZSo9Nwfh2SKOyKOaTs7dKFi5QmJIAAAAAAAAAAAAAAAAAAAAAABiwBrKABDOgRRNlaphSKJsq1MIRRNlWrg77oiibOXjOA057xKOCLqbOFX8KODzUZOL7aGUsKfZpHK0afHxtL6kqi7qz90c8tL8GqzIt0PEiX+pTnTfW2ZfkZPFOJbdFnb4f4joySUqkF0k5JejT2EZvqSIlDyjtQ11Wq5Pde5ailklOOpCiG+Dl+IOKqE6dKMk73c4x+Zrpe2xpJS4UUVx1y2VK+HnissZK0Iu/eT/u7LodMMT7kUlNLo7fD+GRgtEdCiYuR1KdOxYqTJEkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw4gGkqRBNkU8OKFkE8KRRNkE8IRRNlepg+xFCynW4RCW8URtLbjn1/DFOX2r2I2Ft5HDwxlVoVJxXJKUkl6JlfSRPqMn/y05/6lWpJdHKT/AHCxIj1Dq8P4BTp7I0UEijm2dmjhktkXopZYjEkg2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABiwBhwANXSRAI3QQomzV4cULCw4oWSRoihZIoEkGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" },
            { desc: 'Super Pancho', img: "https://http2.mlstatic.com/72-panes-super-pancho-la-perla-350g-fiestissima-liniers-D_NQ_NP_825281-MLA25796963722_072017-F.jpg" }];

            return (<div className="CardAlimentos">
                <Grid container justify="left" spacing={5}>
                    {alimentos.map((value) => {
                        const alimId = `alimento-${value}`;
                        return (
                            <Card id={alimId} className="CardAlimento">
                                <img src={value.img} alt={value.desc}></img>
                                {value.desc}
                                <CardActionArea id={`action-${alimId}`} className="BotonCardAlimento">
                                    Añadir
                            </CardActionArea>
                            </Card>
                        );
                    })}
                </Grid>
            </div>);
        }
        if (this.state.view === 'LOCALES') {
            let comercios = [{ desc: 'Av. San Juan 616', img: 'https://diariolaportada.com.ar/wp-content/uploads/2019/05/Kiosko-solidario-2.jpg', permiso: false },
            { desc: 'Av. De Mayo 1116', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
            { desc: 'Av. San Pedro 616', img: 'https://inforbano.com.ar/wp-content/uploads/2018/10/44330644_248691659152032_6214889948726689792_n.jpg', permiso: true },
            { desc: 'Av. Siempreviva 717', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
            { desc: 'Calle 616', img: 'https://diariolaportada.com.ar/wp-content/uploads/2019/05/Kiosko-solidario-2.jpg', permiso: false },
            { desc: 'Calle Callecita 1116', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
            { desc: 'Otra direccion 616', img: 'https://inforbano.com.ar/wp-content/uploads/2018/10/44330644_248691659152032_6214889948726689792_n.jpg', permiso: true }]

            return (<div className="CardComercios">
                <Grid container justify="left" spacing={5}>
                    {comercios.map((value) => {
                        const comercioId = `comercio-${value}`;
                        return (
                            <Card id={comercioId} className="CardComercio">
                                <img src={value.img} alt={value.desc}></img>
                                {value.desc}
                                {value.permiso === true ? <CardActionArea id={`action-${comercioId}`} className="BotonCardComercio">Quitar</CardActionArea> : <CardActionArea id={`action-${comercioId}`} className="BotonCardComercio">Permitir</CardActionArea>}
                            </Card>
                        );
                    })}
                </Grid>
            </div>)
        }
        if (this.state.view === 'LIMITES') {
            return <div>LIMITES</div>
        }
        if (this.state.view === 'PERFIL') {
            if (this.state.selectedHijo) {
                return (
                    <div className="ProfileHijo">
                            <div>
                                <img style={{marginTop: '10px',width: '5rem', height: '5rem', objectFit: 'cover'}} src={this.state.selectedHijo.img} alt={this.state.selectedHijo.nombre}></img>
                            </div>
                            <h1 style={{textAlign: "center"}}>{this.state.selectedHijo.nombre}</h1>
                            <form className="formProfileHijo">
                                <input type="text" placeholder="NOMBRE"></input>
                                <input type="text" placeholder="APELLIDO"></input>
                                <input type="text" placeholder="FECHA NACIMIENTO"></input>
                                <h5>Saldo actual: $160</h5>
                                
                            </form>
                            <div className="botonesProfileHijo"><button>BORRAR</button><button>GUARDAR</button></div>
                    </div>
                )
            } else {
                return (<div>DEBE SELECCIONAR UN HIJO</div>);
            }
        }
    }

    render() {
        return (
            <div className="childrensContainer">
                <div className="FilaHijos">
                    <Grid container className="gridContainerHijos" spacing={2}>
                        <Grid className="GridItemHijos" item xs={12}>
                            <Grid container justify="left" spacing={5}>
                                {this.state.hijos.map((value) => (
                                    <Grid className="gridHijo" alignItems="center"
                                        justify="center" key={value.nombre} item>
                                        <Card className="CardHijo" elevation={3}>
                                            <CardActionArea className="CardHijo" onClick={() => { this.handleSelectedHijo(value) }}>
                                                <div className="ContentCardHijo">
                                                    <Avatar
                                                        alt={`Avatar n°${value.nombre + 1}`}
                                                        src={value.img}
                                                    />
                                                    <b>{value.nombre}</b>
                                                </div>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                                <Grid className="addHijo" item>
                                    <Card className="CardHijo" elevation={3}>
                                        <CardActionArea className="CardHijo" onClick={this.submitHijo}>
                                            <div className="ContentCardHijo">
                                                <b>+</b>
                                                <p>AÑADIR HIJO</p>
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="FilaMenuBotones">
                    <AppBar color="transparent" position="static">
                        <Tabs inkbarstyle={{ background: 'green' }} onChange={this.handleChange} indicatorColor="primary" textColor="primary"
                            centered>
                            <Tab value={'ALIMENTOS'} label="ALIMENTOS" id={`simple-tab-${0}`} />
                            <Tab value={'LOCALES'} label="LOCALES" id={`simple-tab-${1}`} />
                            <Tab value={'LIMITES'} label="LIMITES" id={`simple-tab-${2}`} />
                            <Tab value={'PERFIL'} label="PERFIL" id={`simple-tab-${3}`} />
                        </Tabs>
                    </AppBar>
                </div>
                <div className="FilaMenuView">
                    <div className="ColumnOpciones">
                        {
                            this.renderOpciones()
                        }
                    </div>
                    <div className="ColumnMenu">
                        {
                            this.renderMenu()
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Childrens;