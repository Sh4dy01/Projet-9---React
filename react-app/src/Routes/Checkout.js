import { Component } from 'react';

import {Spinner, Container} from 'react-bootstrap';


class SendCommand extends Component {
    constructor(props) {
        super(props);
    }

    // {
    //     "data": [
    //       {
    //         "attributes": {
    //           "createdAt": "2022-03-09T12:24:36.763Z",
    //           "updatedAt": "2022-03-09T12:30:34.359Z",
    //           "publishedAt": "2022-03-09T12:25:00.903Z",
    //           "date": "2022-03-08T23:47:00.000Z",
    //           "numberOfArticles": 3,
    //           "total": 40.5,
    //           "games": {
    //             "data": [
    //               {
    //                 "id": 1,
    //                 "attributes": {
    //                   "title": "Outer Wilds",
    //                   "createdAt": "2022-03-02T15:56:03.053Z",
    //                   "updatedAt": "2022-03-08T23:50:37.163Z",
    //                   "publishedAt": "2022-03-02T15:56:05.361Z",
    //                   "description": "Nommé Game of the Year 2019 par _Giant Bomb_, _Polygon_, Eurogamer et _The Guardian_, acclamé par la critique et récompensé par de nombreux prix, Outer Wilds est un jeu mystérieux en monde ouvert, mettant en scène un système solaire piégé dans une boucle temporelle infinie.\n\n## **Bienvenue dans le programme spatial !**\n\nVous êtes la nouvelle recrue de Outer Wilds Ventures, un récent programme spatial qui enquête sur un étrange système solaire en évolution permanente.\n\n## **Les mystères du système solaire...**\n\nQu'est-ce qui se cache au cœur du sinistre Dark Bramble ? Qui a bâti les ruines extraterrestres sur la Lune ? Est-il possible de stopper la boucle temporelle infinie ? Des réponses vous attendent dans les étendues spatiales les plus dangereuses.\n\n## **Un monde qui évolue au fil du temps**\n\nLes planètes de Outer Wilds sont pleines delieux cachés qui évoluent au fil du temps. Visitez une cité souterraine avant qu'elle ne soit ensevelie sous le sable, ou explorez la surface d'une planète qui s'effrite sous vos pieds. Chaque secret est protégé dans des environnements dangereux et soumis à des catastrophes naturelles.\n\n## **Utilisez du matériel d'exploration intergalactique !**\n\nEnfilez vos bottes d'exploration, vérifiez vos réserves d'oxygène et préparez-vous à vous aventurer dans l'espace. Utilisez toute une gamme de gadgets uniques pour sonder l'environnement, suivez des signaux mystérieux, déchiffrez une langue extraterrestre ancienne et faites rôtir vos boules de guimauve à la perfection.",
    //                   "price": 20.99,
    //                   "launched_date": "2019-04-29",
    //                   "link": "https://www.mobiusdigitalgames.com/outer-wilds.html",
    //                   "vidLink": "https://www.youtube.com/embed/AYTjXMytBFI",
    //                   "sold": 0
    //                 }
    //               },
    //               {
    //                 "id": 3,
    //                 "attributes": {
    //                   "title": "Hades",
    //                   "createdAt": "2022-03-02T16:36:53.668Z",
    //                   "updatedAt": "2022-03-08T23:50:27.599Z",
    //                   "publishedAt": "2022-03-02T16:36:55.468Z",
    //                   "description": "\n>Hades est un rogue-like en mode dungeon crawler qui associe le meilleur des titres de Supergiant salués par la critique. Il combine l'action effrénée de Bastion, la profondeur et l'atmosphère très riche de Transistor, ainsi que la narration centrée sur les personnages qui caractérise Pyre.\n\n## **LUTTEZ POUR ÉCHAPPER AUX ENFERS**\n\nDans la peau de l'immortel prince des Enfers, vous manierez les pouvoirs et les armes mythiques de l'Olympe pour vous libérer des griffes du dieu des morts en personne, développant vos forces et dévoilant de nouveaux secrets à chaque nouvelle tentative d'évasion.\n\n## **DÉCHAÎNEZ LA FUREUR DE L'OLYMPE**\n\nLes dieux de l'Olympe sont à vos côtés ! Rencontrez Zeus, Athéna, Poséidon et bien d'autres encore, et faites votre choix parmi les dizaines de puissants Bienfaits qu'ils vous offrent pour décupler vos facultés. Découvrez au cours de votre progression des milliers de configurations personnage réalisables.\n\n\n## **DIEUX, FANTÔMES ET MONSTRES SONT DE VOS AMIS**\n\nToute une bande de personnages hauts en couleur et hors du commun vous attend ! Faites évoluer vos relations et découvrez des centaines d'événements narratifs uniques en perçant à jour les motivations cachées de cette famille aussi grande que peu ordinaire.\n\n## **CONÇU POUR ÊTRE REJOUABLE**\n\nDe nouvelles surprises vous attendent à chacune de vos descentes dans l'univers changeant des Enfers, et jamais les boss qui en sont les gardiens ne vous oublieront. Utilisez le puissant Miroir de la nuit pour devenir plus fort de manière définitive et gagner un avantage lors de votre prochaine échappée.\n\n## **RIEN N'EST IMPOSSIBLE**\n\nGrâce aux améliorations permanentes, pas besoin d'être un dieu pour vivre les combats électrisants et l'histoire palpitante de cette aventure. Mais si vous en êtes un, relevez des défis toujours plus ardus et préparez-vous à de l'action dont l'intensité mettra vos compétences aiguisées à l'épreuve.\n",
    //                   "price": 20.99,
    //                   "launched_date": "2018-12-06",
    //                   "link": "https://www.supergiantgames.com/games/hades/",
    //                   "vidLink": "https://www.youtube.com/embed/ClZe5x8Tfiw",
    //                   "sold": 0
    //                 }
    //               },
    //               {
    //                 "id": 5,
    //                 "attributes": {
    //                   "title": "Stardew Valley",
    //                   "createdAt": "2022-03-05T21:20:07.696Z",
    //                   "updatedAt": "2022-03-08T23:50:41.320Z",
    //                   "publishedAt": "2022-03-05T21:20:09.105Z",
    //                   "description": "## **Stardew Valley est un RPG de vie à la campagne en mode infini !**\n\nVous avez hérité de l'ancienne ferme de votre grand-père dans Stardew Valley.\nArmé d'outils et d'un peu d'argent, vous vous lancez dans votre nouvelle vie.\n\n## **Arriverez-vous à vivre de la terre et à transformer ces champs débordants de végétation en un lieu florissant ?**\n\nCe ne sera pas facile. Depuis que Joja Corporation s'est installé en ville, les anciens modes de vie tendent à disparaître. Le centre de la communauté, autrefois le coeur vibrant de l'activité n'est plus que l'ombre de lui-même.\n\nMais la vallée semble pleine de promesses. Avec un peu de dévouement, vous aurez l'occasion de restaurer sa grandeur passée à Stardew Valley.",
    //                   "price": 13.99,
    //                   "launched_date": "2016-02-26",
    //                   "link": "https://www.stardewvalley.net",
    //                   "vidLink": "https://www.youtube.com/embed/8A7A1X1TVNc",
    //                   "sold": 0
    //                 }
    //               }
    //             ]
    //           }
    //         }
    //       }
    //     ]

    componentDidMount = async ()=> {
        console.log(this.props.commandData);
        
        await fetch('http://localhost:1337/api/commandes', {
            method: 'POST', 
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
            data: this.props.commandData,
        })

        await this.props.history.push('/')
    }

    render(){
        return(
            <Container className='text-center'>
                <h2>Envoie de la commande, veuillez patienter...</h2>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    }
}

export default SendCommand;