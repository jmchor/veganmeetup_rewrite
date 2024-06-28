import { createFileRoute } from '@tanstack/react-router';
import { MdArrowBackIos } from 'react-icons/md';
import { StyledLink } from 'src/styles/StyledLinks';
import {
	EigthItem,
	EleventhItem,
	FifteenthItem,
	FifthItem,
	FirstItem,
	FourteenthItem,
	FourthItem,
	GridContainer,
	NinthItem,
	SecondItem,
	SeventhItem,
	SixteenthItem,
	SixthItem,
	TenthItem,
	ThirdItem,
	ThirteenthItem,
	TwelfthItem,
} from 'src/styles/TimelineStyles';
import { PageContainer } from 'src/styles/VeganMeetupRouteStyles';

export const Route = createFileRoute('/timeline')({
	component: TimeLineComponent,
});

function TimeLineComponent() {
	return (
		<PageContainer style={{ overflow: 'scroll', scrollbarWidth: 'none', backgroundColor: '#000000a5' }}>
			<GridContainer>
				<FirstItem>
					<img src='/miika-laaksonen-unsplash.jpg ' alt='veganismus' />
				</FirstItem>
				<SecondItem>
					<StyledLink to='/'>
						<br />
						<div style={{ display: 'flex', alignItems: 'center', color: 'black', marginTop: '30px', fontSize: '20px' }}>
							<MdArrowBackIos fontSize={20} style={{ marginRight: '5px' }} /> Zurück zur Navigation
						</div>
					</StyledLink>
					<p>
						Veganismus ist ein Sammelbegriff, der in den 1940er Jahren geprägt wurde. Doch natürlich gab es bereits vor
						diesem Begriff Menschen und Gruppen, die keine Tierprodukte konsumierten - hunderte Jahre vorher!
					</p>
				</SecondItem>
				<ThirdItem>
					<p>
						Unter dem Begriff "Ahimsa" zum Beispiel wird im Hinduismus, Jainismus und Buddhismus "Gewaltlosigkeit"
						verstanden, die sich auf die Gewalt gegenüber anderen Lebensformen bezieht - gegenüber allen Lebewesen
					</p>
				</ThirdItem>
				<FourthItem>
					<img src='/ahimsa-g97ce8c14e_1280.png' alt='Ahimsa' />
				</FourthItem>
				<FifthItem>
					<img src='/juno-jo-HTLD80hcFeg-unsplash.jpg' alt='writing' />
				</FifthItem>
				<SixthItem>
					<p>
						Vegane und vegetarische Wurzeln in Indien und dem afrikanischen Kontinent - in heutigen Statistiken liegt
						Indien mit 9% Veganer:Innen in der Gesamtbevölkerung vorne. Das sind über 120 Millionen Menschen! Im
						Vergleich: In Deutschland sind etwa 2% der Bevölkerung vegan - über 1.5 Millionen Menschen.{' '}
						<a href='https://www.statista.com/statistics/1280066/global-country-ranking-vegan-share/' target='_blank'>
							[1]
						</a>
					</p>
				</SixthItem>
				<SeventhItem>
					<p>
						Die Vegan Society ging aus der Vegetarian Society hervor - gegründet von Donald Watson, Elsie Shrigley sowie
						Fay und George Henderson. 1944 wurde das Wort "vegan" definiert als ein Begriff, der mit dem "VEGetarian"
						lifestyle beginnt und ihn zu seinem logischen Schluss bringt ("vegetariAN").{' '}
					</p>

					<p>
						Die Society erstellte auch eine{' '}
						<a href='https://www.vegansociety.com/go-vegan/definition-veganism' target='_blank'>
							Definition des Veganismus
						</a>
						, die in vielen Auffassungen über ein veganes Leben den Grundsatz bildet.
					</p>

					<p>
						Mehr Infos über die Vegan Society, ihre Geschichte und weiterführende Links findet ihr{' '}
						<a href='https://www.vegansociety.com/about-us/further-information/key-facts' target='_blank'>
							hier
						</a>
					</p>
				</SeventhItem>
				<EigthItem>
					<img src='/vegan_trademark.jpg' alt='Vegan Trademark' />
				</EigthItem>
				<NinthItem>
					<img src='/money-g333e59075_1920.jpg' alt='' />
				</NinthItem>
				<TenthItem>
					<p>
						Es ist eine weit verbreitete Ansicht heutzutage, besonders in der westlichen Welt, dass Veganismus etwas von
						und für Weiße Hipster und Instagram-Influencer:Innen ist, die sich einen "teuren" Lebensstil leisten können.
					</p>

					<p>
						Zunächst einmal ist es nicht zwingend teurer, sich pflanzlich zu ernähren - eine Ernährungsumstellung kommt
						einher mit einer Phase des Ausprobierens, in der man viele Produkte testen will. Sobald man aber eine
						gewisse Routine hat, unterscheiden sich die Ausgabe zwischen den Ernährungsweisen kaum. Natürlich ist dies
						auch abhängig von verschiedenen Werbestrategien in verschiedenen Ländern - in denen etwa Fastfood oder
						Billigfleisch günstiger zu erhalten ist als Gemüse oder Obst.{' '}
					</p>

					<p>
						Für Tips für eine vegane Ernährung gibt es{' '}
						<a href='https://www.vegansociety.com/take-action/campaigns/live-vegan-less' target='_blank'>
							hier einige Infos
						</a>
					</p>
				</TenthItem>
				<EleventhItem>
					<p>
						Gerade in den USA, wo{' '}
						<a href='https://www.vrg.org/press/201511press.htm' target='_blank'>
							8%
						</a>{' '}
						der Schwarzen US-Amerikaner vegan oder vegetarisch leben (im Gegensatz zu 3% der gesamten US-Bevölkerung),
						etabliert sich eine Bewegung, die Vegan-Aktivismus mit der Arbeit gegen Rassismus, Speziesmus und den Folgen
						der Sklaverei denkt. Lest gerne selbst mehr über die Bewegung (
						<a href='http://www.veganismofcolor.com/' target='_blank'>
							[1]
						</a>
						,{' '}
						<a href='https://foodispower.org/' target='_blank'>
							[2]
						</a>
						,{' '}
						<a href='https://blackvegfest.org/' target='_blank'>
							[3]
						</a>{' '}
						uvm)
					</p>
				</EleventhItem>
				<TwelfthItem>
					<img src='/bvf.jpg' alt='Black Veg Fest' />
				</TwelfthItem>
				<ThirteenthItem>
					<img src='/WAM17307.jpg' alt='Donkey Sanctuary' />
				</ThirteenthItem>
				<FourteenthItem>
					<p>
						Es gibt viele gute Gründe, eine vegane Lebensweise zu verfolgen - gesundheitliche Gründe, Geschmack,
						Tradition, Klimaschutz. Im ethischen Veganismus (das, was den Unterschied zwischen "plant-based", also
						pflanzlich, und "vegan" ausmacht) steht das Verhältnis zwischen Mensch und Tier im Vordergrund. Genauer
						gesagt geht es darum, den Menschen aus dem Zentrum zu nehmen und die Mitwelt ganzheitlich zu denken - in
						Beziehungen zueinander. Es geht darum, tradierte Konzepte von Dominanz und Kontrolle zu hinterfragen.
						Ethische Veganer:Innen lehnen jeglichen Konsum tierischer Produkte ab (ob im Essen oder der Kleidung) und
						engangieren sich sehr oft im aktivistischen Bereich, um das Beziehungsgeflecht menschlicher Gesellschaften
						zu ihren schwächsten Gliedern, den Tieren, neu zu denken. Mehr dazu im Bereich Aktiv Werden
					</p>
				</FourteenthItem>
				<FifteenthItem>
					<h1>Und was ist nun mit Honig?</h1>
					<p>
						Rein theoretisch lässt sich diese Frage schnell beantworten: wer sich pflanzlich ernährt, lässt Honig stehen
						– es ist ein Lebensmittel, das von Bienen für Bienen hergestellt wird, also ein Tierprodukt. Aus veganer
						Perspektive hieße Honig essen sich selbst über die Bedürfnisse der Biene zu stellen, aus keinem anderen
						Grund als dem eigenen Geschmack – ein vernachlässigbarer Grund.
					</p>

					<p>
						Nun gibt es aber beispielsweise viele Hobbyimker, die nicht viel mit den erschreckenden Praktiken der
						Honigindustrie zu tun haben (wie etwa dem Verkrüppeln der Bienenkönigin und deren “künstlicher Befruchtung”
						mit dem Samen getöteter Drohnen). Durch jahrhundertelange Tradition haben sich gerade Honigbienen an das
						Dazwischenfunken der Menschen gewöhnt und zählen in manchen Fällen darauf. Durch das künstliche
						Aufrechterhalten von Bienenvölkern durch Imkerstöcke wird auch für eine flächendeckende Bestäubung von
						Blumen gesorgt – ganz so schwarz-weiß lässt sich im echten Leben leider nicht sehr viel sehen.
					</p>

					<p>
						Von einer veganen Perspektive wäre es dem Imker keinesfalls erlaubt, Honig zu behalten – solange ein Imker
						sich allein um das Wohl des Bienenvolkes kümmert und keinen eigenen Nutzen davon zieht, befindet man sich
						wohl in einem Graubereich – darüber muss aber diskutiert werden.
					</p>
					<StyledLink to='/'>
						<br />
						<div style={{ display: 'flex', alignItems: 'center', color: 'black', marginTop: '30px', fontSize: '20px' }}>
							<MdArrowBackIos fontSize={20} style={{ marginRight: '5px' }} /> Zurück zur Navigation
						</div>
					</StyledLink>
				</FifteenthItem>
				<SixteenthItem>
					<h1>Wenn ich selbst aber glückliche Hühner halte, darf ich deren Eier essen, oder?</h1>
					<p>Immer davon ausgehend, dass eine vegane Lebensweise das Ziel ist: absolut nicht.</p>

					<p>
						Es gibt in der westlichen Welt beinahe keine Hühner mehr, die nicht durch menschliche Einmischung so
						gezüchtet wurden, dass sie entweder monströs schnell wachsen oder gefährlich viele Eier legen. 300 Eier pro
						Jahr sind es für die Legehennen – “normal” wären etwa 30. Zweifelsfrei haben Hühner es in eurem Garten
						schöner als in einer Batterie – das ist aber ein sehr fauler Standard. Hühner verlieren ihre Knochendichte
						dadurch, dass sie so viele Eier legen – das beste wäre es, ihnen die Eier zurückzufüttern.
					</p>

					<p>
						Aber was, wenn die Hühner nicht alle Eier essen? Wegschmeißen – als Dünger verwenden. Für vegan lebende
						Menschen gilt nach wie vor die Prämisse sich von Jahrhunderte lang tradiertem Denken zu befreien – Tiere
						sind nicht FÜR den Menschen da. Weder als Nahrung noch als Entertainment.
					</p>

					<p>Wenn das einmal verstanden wird, stellt sich die Frage nach “glücklichen Eiern” nicht mehr.</p>
				</SixteenthItem>
			</GridContainer>
		</PageContainer>
	);
}
