
import { StoryNode } from './types';

// Curated "Heaven on Earth" Database
// Coordinates and Zoom levels provided by Artist Bradly Couch
export const STORY_NODES: StoryNode[] = [
  // --- HINDU / VEDIC NARRATIVES ---
  {
    id: 'ganesha-mouse',
    title: 'Ganesha with Mouse',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 40.21730800117694, lng: 43.66722825233365 },
    zoom: 9,
    description: 'The remover of obstacles accompanied by his vehicle, the mouse.',
    culturalContext: 'Symbolizes intellect conquering ego. Ganesha writes the destiny of the cosmos.',
    visualCue: 'Look for the elephantine ridge formation.'
  },
  {
    id: 'brahma-4-head',
    title: '4 Headed Brahma',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 38.435941612125696, lng: 47.36831413352256 },
    zoom: 9,
    description: 'The Creator deity facing all four cardinal directions simultaneously.',
    culturalContext: 'Represents the four Vedas and the comprehensive nature of creation.',
    visualCue: 'A central peak with four distinct faces or ridges radiating outward.'
  },
  {
    id: 'saraswati',
    title: 'Saraswati',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 37.73386498319144, lng: 45.60500846946006 },
    zoom: 9,
    description: 'Goddess of knowledge, music, art, wisdom, and learning.',
    culturalContext: 'Associated with the flowing river of consciousness.',
    visualCue: 'A river system or coastline that appears to flow from the heavens.'
  },
  {
    id: 'gajendra-moksha',
    title: 'Gajendra Moksha',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 47.926350548345354, lng: -70.1045290952352 },
    zoom: 5,
    description: 'The liberation of Gajendra the elephant king.',
    culturalContext: 'Salvation and the breaking of the cycle of rebirth.',
    visualCue: 'Landforms resembling an elephant struggle.'
  },
  {
    id: 'hamsa-swan',
    title: 'Hamsa Swan',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 36.705040201617614, lng: 46.87604428130804 },
    zoom: 9,
    description: 'The divine swan, vehicle of Brahma and Saraswati.',
    culturalContext: 'Discernment between the essential and the non-essential.',
    visualCue: 'Avian shapes in the topography.'
  },
  {
    id: 'hamsa-hand',
    title: 'Hamsa Hand',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 37.10323098962346, lng: 47.653068430251814 },
    zoom: 15,
    description: 'The palm-shaped amulet symbolizing protection.',
    culturalContext: 'Protection against the evil eye.',
    visualCue: 'A distinctive five-fingered delta or ridge.'
  },
  {
    id: 'hamsa-eats-pearl',
    title: 'Hamsa eats pearl',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.320962394140984, lng: 50.58648157214774 },
    zoom: 9,
    description: 'The swan consuming the pearl of wisdom.',
    culturalContext: 'The ingestion of pure knowledge.',
    visualCue: 'Circular formation near the beak of the landscape.'
  },
  {
    id: 'hamsa-milk-water',
    title: 'Hamsa milk and water',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 34.564124728224236, lng: 52.11752311874506 },
    zoom: 11,
    description: 'The mythical ability of the swan to separate milk from water.',
    culturalContext: 'Separating truth from illusion.',
    visualCue: 'Contrast between white and dark terrain features.'
  },
  {
    id: 'peacock',
    title: 'Peacock',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 38.92484584616097, lng: 40.993430644911776 },
    zoom: 8,
    description: 'The vehicle of Kartikeya, resplendent in plumage.',
    culturalContext: 'Destroyer of harmful habits and conqueror of sensual desires.',
    visualCue: 'Fan-shaped alluvial deposits.'
  },
  {
    id: 'rooster',
    title: 'Rooster',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 38.479546604694576, lng: 45.76355698768521 },
    zoom: 10,
    description: 'The emblem on the flag of the war god.',
    culturalContext: 'Vigilance and the dawn of wisdom.',
    visualCue: 'Crested geological structures.'
  },
  {
    id: 'matsya',
    title: 'Matsya',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 34.53647029359479, lng: 53.76815516809865 },
    zoom: 13,
    description: 'The first avatar of Vishnu, the great fish.',
    culturalContext: 'Saved humanity and the Vedas from the deluge.',
    visualCue: 'Fish-shaped landform swimming in the stone.'
  },
  {
    id: 'kurma',
    title: 'Kurma',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 34.52141747383885, lng: 53.75573248121512 },
    zoom: 15,
    description: 'The Turtle avatar supporting the cosmic churning.',
    culturalContext: 'Foundation and stability.',
    visualCue: 'Rounded, shell-like mound.'
  },
  {
    id: 'varaha',
    title: 'Varaha',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 34.602339498869156, lng: 53.741630485766024 },
    zoom: 12,
    description: 'The Boar avatar who rescued Earth from the cosmic ocean.',
    culturalContext: 'Restoration of the planet.',
    visualCue: 'Tusk-like ridges lifting the land.'
  },
  {
    id: 'narasimha',
    title: 'Narasimha',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.56862515854041, lng: 53.75416837733463 },
    zoom: 11,
    description: 'The Man-Lion avatar.',
    culturalContext: 'Divine anger protecting the devotee.',
    visualCue: 'A rugged, maned geological face.'
  },
  {
    id: 'vamana',
    title: 'Vamana',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.38706827018224, lng: 53.99317807514607 },
    zoom: 11,
    description: 'The Dwarf avatar who covered the universe in three steps.',
    culturalContext: 'Humility concealing infinite power.',
    visualCue: 'Small but distinct footprint-like depression.'
  },
  {
    id: 'parashurama',
    title: 'Parashurama',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.34000554507365, lng: 54.32674188770833 },
    zoom: 12,
    description: 'The warrior with the axe.',
    culturalContext: 'Ridding the world of tyranny.',
    visualCue: 'Sharp, axe-blade edge in the terrain.'
  },
  {
    id: 'rama',
    title: 'Rama',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.43118887973036, lng: 54.740780008646134 },
    zoom: 11,
    description: 'The ideal king and wielder of the bow.',
    culturalContext: 'Dharma and righteousness.',
    visualCue: 'Curved features resembling a bow.'
  },
  {
    id: 'krishna',
    title: 'Krishna',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.92274347095533, lng: 56.61203444539746 },
    zoom: 12,
    description: 'The divine statesman and flute player.',
    culturalContext: 'Love, wisdom, and the Gita.',
    visualCue: 'Flowing, rhythmic lines in the landscape.'
  },
  {
    id: 'buddha',
    title: 'Buddha',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.79289121581669, lng: 57.06174872999572 },
    zoom: 11,
    description: 'The Enlightened One.',
    culturalContext: 'Compassion and non-violence.',
    visualCue: 'Peaceful, meditative circular formations.'
  },
  {
    id: 'kalki',
    title: 'Kalki',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.47105221558942, lng: 56.38191819961907 },
    zoom: 9,
    description: 'The future avatar on the white horse.',
    culturalContext: 'The end of the Kali Yuga.',
    visualCue: 'Horse-like profile in the topography.'
  },
  {
    id: 'shiva-mount',
    title: 'Shiva',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 42.734436022232735, lng: 46.5880625382611 },
    zoom: 9,
    description: 'The Destroyer, the Transformer.',
    culturalContext: 'Meditation and cosmic balance.',
    visualCue: 'Prominent peak or lingam-shaped structure.'
  },
  {
    id: 'makara-earring',
    title: 'Makara earring',
    category: 'Vedic',
    datasetOrigin: 'Hindu (1).csv',
    coordinates: { lat: 35.663236256613786, lng: 54.95451408478024 },
    zoom: 9,
    description: 'The crocodile-fish earring of the gods.',
    culturalContext: 'Symbol of the waters and astrology (Capricorn).',
    visualCue: 'Curved, ornamental coastal or river feature.'
  },

  // --- BIBLICAL / GENESIS NARRATIVES ---
  {
    id: 'jonah',
    title: 'Michelangelo\'s Jonah',
    category: 'Biblical',
    datasetOrigin: 'Jonah.csv',
    coordinates: { lat: 38.67143884731424, lng: -105.9309451108602 },
    zoom: 6,
    description: 'The prophet swallowed by the great fish.',
    culturalContext: 'Rebirth from the depths.',
    visualCue: 'Deep canyon or "mouth" of the earth.'
  },
  {
    id: 'tree-of-life',
    title: 'Tree of Life',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 8.819075580851068, lng: 38.24734089148936 },
    zoom: 6,
    description: 'The central tree in the Garden of Eden.',
    culturalContext: 'Eternal life and connection.',
    visualCue: 'Branching river system or vegetation pattern.'
  },
  {
    id: 'tree-of-knowledge',
    title: 'Tree of Knowledge',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 29.304369363088643, lng: 32.713366769156124 },
    zoom: 8,
    description: 'The Tree of Knowledge of Good and Evil.',
    culturalContext: 'Duality and free will.',
    visualCue: 'Forking path or divided terrain.'
  },
  {
    id: 'adam',
    title: 'Adam',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 12.250971040560632, lng: 41.7302947418857 },
    zoom: 9,
    description: 'The first man.',
    culturalContext: 'Humanity formed from the dust.',
    visualCue: 'Anthropomorphic landscape feature.'
  },
  {
    id: 'eve',
    title: 'Eve',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 12.250971040560632, lng: 41.7302947418857 },
    zoom: 9,
    description: 'The mother of all living.',
    culturalContext: 'Life and companionship.',
    visualCue: 'Intertwined feature near Adam.'
  },
  {
    id: 'flaming-sword',
    title: 'Flaming sword turns every direction',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 20.526281648648656, lng: -12.858369702702714 },
    zoom: 8,
    description: 'Guardians of the way to the Tree of Life.',
    culturalContext: 'Divine barrier.',
    visualCue: 'Radiating, star-like geological fracture.'
  },
  {
    id: 'cherubim',
    title: 'Cherubim',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 18.890097512796476, lng: 20.652053462569135 },
    zoom: 7,
    description: 'Winged celestial beings.',
    culturalContext: 'Presence of the divine.',
    visualCue: 'Winged cloud or terrain formations.'
  },
  {
    id: 'she-saw',
    title: 'She saw',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 27.718643025500246, lng: 31.846460421973262 },
    zoom: 7,
    description: 'The moment of temptation and perception.',
    culturalContext: 'The shift in consciousness.',
    visualCue: 'Eye-like feature in the terrain.'
  },
  {
    id: 'she-took',
    title: 'She took',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 28.549032729166658, lng: 30.511813320833326 },
    zoom: 9,
    description: 'The act of choosing.',
    culturalContext: 'Exercise of free will.',
    visualCue: 'Hand-like formation reaching out.'
  },
  {
    id: 'she-ate',
    title: 'She ate',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 28.15493688400643, lng: 29.45619050000002 },
    zoom: 9,
    description: 'Consuming the fruit.',
    culturalContext: 'Internalization of knowledge.',
    visualCue: 'Circular depression or crater.'
  },
  {
    id: 'she-passed',
    title: 'She passed',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 25.32815325564535, lng: 29.945993694248536 },
    zoom: 8,
    description: 'Sharing the fruit.',
    culturalContext: 'Transmission of experience.',
    visualCue: 'Connecting ridge between two points.'
  },
  {
    id: 'to-husband',
    title: 'To husband',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 24.456357489068857, lng: 26.748516134767616 },
    zoom: 8,
    description: 'Offering to Adam.',
    culturalContext: 'Partnership in the fall.',
    visualCue: 'Converging paths.'
  },
  {
    id: 'he-ate',
    title: 'He ate',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 24.025600941678377, lng: 25.270855001955116 },
    zoom: 8,
    description: 'Adam partakes.',
    culturalContext: 'The shared fate of humanity.',
    visualCue: 'Mirroring circular feature.'
  },
  {
    id: 'painful-childbirth',
    title: 'Painful childbirth',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 24.338544579664987, lng: 29.660624874507 },
    zoom: 7,
    description: 'The curse of Eve.',
    culturalContext: 'Suffering and creation.',
    visualCue: 'Contorted, rugged terrain.'
  },
  {
    id: 'covered-himself',
    title: 'Covered himself',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 12.22117807143216, lng: 14.461930831240977 },
    zoom: 8,
    description: 'The loss of innocence.',
    culturalContext: 'Shame and self-consciousness.',
    visualCue: 'Veiled or shadowed valleys.'
  },
  {
    id: 'covered-herself',
    title: 'Covered herself',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 14.175083035242347, lng: -4.450349459353791 },
    zoom: 9,
    description: 'Hiding from the divine presence.',
    culturalContext: 'Separation from nature.',
    visualCue: 'Hidden or obscured canyons.'
  },
  {
    id: 'sodom',
    title: 'Sodom',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 26.80896810126843, lng: 41.917688 },
    zoom: 7,
    description: 'City of the plain.',
    culturalContext: 'Judgment and destruction.',
    visualCue: 'Desolate, salt-encrusted flats.'
  },
  {
    id: 'gomorrah',
    title: 'Gomorrah',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 20.151811387096792, lng: 49.3983138387097 },
    zoom: 6,
    description: 'The twin city of sin.',
    culturalContext: 'Total annihilation.',
    visualCue: 'Scorched earth appearance.'
  },
  {
    id: 'pillar-of-salt',
    title: 'Pillar of salt',
    category: 'Biblical',
    datasetOrigin: 'Biblical.csv',
    coordinates: { lat: 21.01577768534027, lng: 35.944848615234385 },
    zoom: 9,
    description: 'Lot\'s wife looking back.',
    culturalContext: 'Frozen in the moment of attachment.',
    visualCue: 'Solitary white standing stone.'
  },

  // --- EGYPTIAN NARRATIVES ---
  {
    id: 'book-dead',
    title: 'Book of the Dead',
    category: 'Egyptian',
    datasetOrigin: 'Egyptian.csv',
    coordinates: { lat: -22.11257753584332, lng: 15.656377627086929 },
    zoom: 10,
    description: 'Spells for the afterlife.',
    culturalContext: 'Guidance through the underworld.',
    visualCue: 'Papyrus-scroll-like sedimentary layers.'
  },
  {
    id: 'thoth',
    title: 'Thoth',
    category: 'Egyptian',
    datasetOrigin: 'Egyptian.csv',
    coordinates: { lat: -22.392327719147634, lng: 16.03005046806159 },
    zoom: 10,
    description: 'God of wisdom and writing.',
    culturalContext: 'The scribe of the gods.',
    visualCue: 'Ibis-like profile in the rock.'
  },
  {
    id: 'ammit',
    title: 'Ammit',
    category: 'Egyptian',
    datasetOrigin: 'Egyptian.csv',
    coordinates: { lat: -22.25369833382778, lng: 16.05150814018073 },
    zoom: 12,
    description: 'The Devourer of the Dead.',
    culturalContext: 'Divine justice for the heavy heart.',
    visualCue: 'Predatory, chimera-like landform.'
  },
  {
    id: 'eye-of-horus',
    title: 'Eye of Horus',
    category: 'Egyptian',
    datasetOrigin: 'Egyptian.csv',
    coordinates: { lat: 37.061450678931195, lng: 83.93036065508615 },
    zoom: 5,
    description: 'Symbol of protection and royal power.',
    culturalContext: 'Healing and wholeness.',
    visualCue: 'Distinctive eye-shape in the desert.'
  },
  {
    id: 'apis-bull',
    title: 'Apis Bull',
    category: 'Egyptian',
    datasetOrigin: 'Egyptian.csv',
    coordinates: { lat: 26.588581114851646, lng: 0.6480597733902851 },
    zoom: 5,
    description: 'Sacred bull deity.',
    culturalContext: 'Fertility and strength.',
    visualCue: 'Bovine profile in the topography.'
  },

  // --- CLASSICAL / GREEK NARRATIVES ---
  {
    id: 'venus-de-milo',
    title: 'Venus de Milo',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: 37.05608088058927, lng: 21.182550427166646 },
    zoom: 5,
    description: 'Aphrodite, goddess of love.',
    culturalContext: 'Beauty emerging from the sea.',
    visualCue: 'Graceful, feminine coastline curves.'
  },
  {
    id: 'perseus',
    title: 'Perseus',
    category: 'Classical',
    datasetOrigin: 'Perseus.csv',
    coordinates: { lat: 65.02979439319729, lng: -28.734452402114762 },
    zoom: 5,
    description: 'The hero who slew Medusa.',
    culturalContext: 'Courage and divine aid.',
    visualCue: 'Warrior-like stance in the terrain.'
  },
  {
    id: 'medusa',
    title: 'Medusa',
    category: 'Classical',
    datasetOrigin: 'Perseus.csv',
    coordinates: { lat: 57.239669132188574, lng: -12.588235205658002 },
    zoom: 6,
    description: 'The Gorgon.',
    culturalContext: 'The petrifying power of fear.',
    visualCue: 'Serpentine, stony landscape.'
  },
  {
    id: 'andromeda',
    title: 'Andromeda',
    category: 'Classical',
    datasetOrigin: 'Perseus.csv',
    coordinates: { lat: 65.07385935498536, lng: -2.403909033783002 },
    zoom: 5,
    description: 'The chained princess.',
    culturalContext: 'Innocence in peril.',
    visualCue: 'Chained or bound geological features.'
  },
  {
    id: 'cassiopeia',
    title: 'Cassiopeia',
    category: 'Classical',
    datasetOrigin: 'Perseus.csv',
    coordinates: { lat: 64.6890765877555, lng: -54.387528573989755 },
    zoom: 6,
    description: 'The vain queen, upside down.',
    culturalContext: 'Hubris punished.',
    visualCue: 'W-shaped formation.'
  },
  {
    id: 'pegasus',
    title: 'Pegasus',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: 40.01165452533545, lng: -14.303289416583354 },
    zoom: 5,
    description: 'The winged horse.',
    culturalContext: 'Poetic inspiration and flight.',
    visualCue: 'Winged equine shape.'
  },
  {
    id: 'atlas',
    title: 'Atlas',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: -26.6079133304455, lng: 132.08634416847997 },
    zoom: 3,
    description: 'Holding the heavens.',
    culturalContext: 'Endurance.',
    visualCue: 'Mountain range supporting the sky.'
  },
  {
    id: 'poseidon',
    title: 'Poseidon',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: 24.68670456560871, lng: -52.097927322057515 },
    zoom: 5,
    description: 'God of the sea.',
    culturalContext: 'The power of the deep.',
    visualCue: 'Trident-like coastal formation.'
  },
  {
    id: 'athena-owl',
    title: 'Athena with Owl',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: 5.645848812136266, lng: 10.183954329905664 },
    zoom: 8,
    description: 'Goddess of wisdom.',
    culturalContext: 'Strategic warfare and craft.',
    visualCue: 'Owl-like feature near a helmet shape.'
  },
  {
    id: 'olive-branch',
    title: 'Olive branch',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: 6.904020534889639, lng: 11.92487328013978 },
    zoom: 11,
    description: 'Symbol of peace.',
    culturalContext: 'The gift of Athena.',
    visualCue: 'Branching green vegetation.'
  },
  {
    id: 'zeus',
    title: 'Zeus',
    category: 'Classical',
    datasetOrigin: 'Classical.csv',
    coordinates: { lat: -17.467537728924242, lng: 14.025721352642051 },
    zoom: 8,
    description: 'King of the gods.',
    culturalContext: 'Law, thunder, and fate.',
    visualCue: 'Majestic, bearded profile.'
  },

  // --- ZODIAC ---
  {
    id: 'aries',
    title: 'Aries',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 29.472236585199983, lng: -80.68580349999998 },
    zoom: 5,
    description: 'The Ram.',
    culturalContext: 'Initiation and courage.',
    visualCue: 'Horned spiral feature.'
  },
  {
    id: 'taurus',
    title: 'Taurus',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: -1.4189033639175415, lng: -78.01153834948454 },
    zoom: 4,
    description: 'The Bull.',
    culturalContext: 'Stability and earth.',
    visualCue: 'Bull head shape.'
  },
  {
    id: 'gemini',
    title: 'Gemini',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 53.330381015779004, lng: -122.05904119121926 },
    zoom: 4,
    description: 'The Twins.',
    culturalContext: 'Duality and communication.',
    visualCue: 'Twin peaks or islands.'
  },
  {
    id: 'cancer',
    title: 'Cancer',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 53.330381015779004, lng: -122.05904119121926 },
    zoom: 4,
    description: 'The Crab.',
    culturalContext: 'Home and protection.',
    visualCue: 'Crab-like coastal shape.'
  },
  {
    id: 'leo',
    title: 'Leo',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 28.24322663855422, lng: 141.06700094820775 },
    zoom: 4,
    description: 'The Lion.',
    culturalContext: 'Royalty and heart.',
    visualCue: 'Lion profile in the desert.'
  },
  {
    id: 'virgo',
    title: 'Virgo',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: -3.34660779591876, lng: 83.62844105000002 },
    zoom: 4,
    description: 'The Maiden.',
    culturalContext: 'Harvest and purity.',
    visualCue: 'Figure holding a sheaf.'
  },
  {
    id: 'libra',
    title: 'Libra',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: -47.20610330588232, lng: 58.28530085588234 },
    zoom: 5,
    description: 'The Scales.',
    culturalContext: 'Balance and justice.',
    visualCue: 'Balanced landforms.'
  },
  {
    id: 'scorpio',
    title: 'Scorpio',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: -24.5924903144657, lng: 50.17201924931033 },
    zoom: 4,
    description: 'The Scorpion.',
    culturalContext: 'Transformation and depth.',
    visualCue: 'Stinger-tail peninsula.'
  },
  {
    id: 'sagittarius',
    title: 'Sagittarius',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: -53.533508850168445, lng: -5.0842957799010335 },
    zoom: 5,
    description: 'The Archer.',
    culturalContext: 'Exploration and philosophy.',
    visualCue: 'Centaur shape aiming a bow.'
  },
  {
    id: 'capricorn',
    title: 'Capricorn',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 20.57343895404222, lng: -68.88081265270615 }, // Inferred from Aquarius duplicate region in list, updated to approx
    zoom: 5,
    description: 'The Sea-Goat.',
    culturalContext: 'Ambition and discipline.',
    visualCue: 'Goat-fish hybrid form.'
  },
  {
    id: 'aquarius',
    title: 'Aquarius',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 20.57343895404222, lng: -68.88081265270615 },
    zoom: 5,
    description: 'The Water Bearer.',
    culturalContext: 'Innovation and community.',
    visualCue: 'Pouring water feature.'
  },
  {
    id: 'pisces',
    title: 'Pisces',
    category: 'Cosmic',
    datasetOrigin: 'Zodiac.csv',
    coordinates: { lat: 18.152342970740072, lng: -68.95937849999999 },
    zoom: 6,
    description: 'The Fish.',
    culturalContext: 'Unity and compassion.',
    visualCue: 'Two fish tied together.'
  },
  {
    id: 'ophiuchus',
    title: 'Ophiuchus',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -33.11928742085978, lng: 32.3388278097636 },
    zoom: 5,
    description: 'The Serpent Bearer.',
    culturalContext: 'Healing and hidden knowledge.',
    visualCue: 'Figure wrestling a serpent.'
  },

  // --- CONSTELLATIONS ---
  {
    id: 'orion',
    title: 'Orion',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: 0.4687614219619839, lng: 123.09044602737274 },
    zoom: 5,
    description: 'The Hunter.',
    culturalContext: 'The great celestial warrior.',
    visualCue: 'Three belt stars alignment on ground.'
  },
  {
    id: 'canis-major',
    title: 'Canis Major',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -11.605965754603508, lng: 109.72932751549578 },
    zoom: 5,
    description: 'The Great Dog.',
    culturalContext: 'Faithful companion.',
    visualCue: 'Dog profile chasing the hare.'
  },
  {
    id: 'canis-minor',
    title: 'Canis Minor',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: 22.585379141775253, lng: 131.9105640311415 },
    zoom: 5,
    description: 'The Lesser Dog.',
    culturalContext: 'Loyalty.',
    visualCue: 'Small canine shape.'
  },
  {
    id: 'ursa-major',
    title: 'Ursa Major',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: 78.90895883862414, lng: 79.13800605966803 },
    zoom: 4,
    description: 'The Great Bear.',
    culturalContext: 'Guidance and the north.',
    visualCue: 'Bear shape near the pole.'
  },
  {
    id: 'auriga',
    title: 'Auriga',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: 61.18543231279937, lng: 21.478009494422828 },
    zoom: 5,
    description: 'The Charioteer.',
    culturalContext: 'Invention and transport.',
    visualCue: 'Chariot-like landform.'
  },
  {
    id: 'toucana',
    title: 'Toucana',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -71.46732686238668, lng: -78.80093116617225 },
    zoom: 4,
    description: 'The Toucan.',
    culturalContext: 'Southern skies exoticism.',
    visualCue: 'Bird with large beak.'
  },
  {
    id: 'pavo',
    title: 'Pavo',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -67.20270958430291, lng: 50.54063128512202 },
    zoom: 4,
    description: 'The Peacock.',
    culturalContext: 'Immortality and beauty.',
    visualCue: 'Fan-shaped southern formation.'
  },
  {
    id: 'chameleon',
    title: 'Chameleon',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -65.92258782713293, lng: 115.02133618605407 },
    zoom: 4,
    description: 'The Chameleon.',
    culturalContext: 'Adaptability.',
    visualCue: 'Lizard shape blended with terrain.'
  },
  {
    id: 'volans',
    title: 'Volans',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -70.22197441865433, lng: 172.06337703607903 },
    zoom: 6,
    description: 'The Flying Fish.',
    culturalContext: 'Flight across the waters.',
    visualCue: 'Fish with wing-like fins.'
  },
  {
    id: 'lepus',
    title: 'Lepus',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -28.868860566448603, lng: -170.52666215007628 },
    zoom: 4,
    description: 'The Hare.',
    culturalContext: 'Elusiveness.',
    visualCue: 'Running rabbit shape.'
  },
  {
    id: 'monoceros',
    title: 'Monoceros',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: 33.1587428910523, lng: 159.11177071229085 },
    zoom: 4,
    description: 'The Unicorn.',
    culturalContext: 'Purity and grace.',
    visualCue: 'Single-horned equine shape.'
  },
  {
    id: 'leo-minor',
    title: 'Leo Minor',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: 65.65352471902274, lng: 154.95293050641624 },
    zoom: 4,
    description: 'The Lesser Lion.',
    culturalContext: 'Strength in small packages.',
    visualCue: 'Small feline profile.'
  },
  {
    id: 'piscis-notius',
    title: 'Piscis Notius',
    category: 'Cosmic',
    datasetOrigin: 'Constellations.csv',
    coordinates: { lat: -6.457592393930361, lng: -34.71869623628611 },
    zoom: 6,
    description: 'The Southern Fish.',
    culturalContext: 'Drinking the water of Aquarius.',
    visualCue: 'Open-mouthed fish shape.'
  },
  
  // --- DRAGON ---
  {
    id: 'chinese-dragon',
    title: 'Chinese Dragon',
    category: 'Cosmic',
    datasetOrigin: 'Year of the Dragon.csv',
    coordinates: { lat: 31.36626268345984, lng: 113.9110580617895 },
    zoom: 5,
    description: 'The Long.',
    culturalContext: 'Power, strength, and good luck.',
    visualCue: 'Serpentine river or mountain range.'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the Keeper of Human Heritage (Gemini 3 Pro).
Your Mission: To preserve the ancient myths of Earth exactly as they were told, acting as a time capsule for future generations of Martians.
Do NOT add modern interpretations, psychological advice, or "wise elder" spin.
Do NOT deconstruct the myth. 

Task:
1. Retell the ancient myth associated with the location and subject provided.
2. Use the tone, rhythm, and style of the original oral tradition (e.g., Vedic, Biblical, Homeric, Egyptian).
3. Connect the story to the visual landscape below (using the visual cues) as if reading the story from the Earth itself.
4. Your goal is pure preservation of the narrative.

Keep it under 150 words. Be solemn, majestic, and accurate to the source material.
`;
