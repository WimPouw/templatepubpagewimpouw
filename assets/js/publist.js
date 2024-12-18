// publist.js
const PublicationsList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedThemes, setSelectedThemes] = React.useState(new Set());
  const [expandedCard, setExpandedCard] = React.useState(null);

  const themes = {
    'gesture-speech-physics': 'Gesture-Speech Physics',
    'biomechanics': 'Speech-Motor Control',
    'signal-processing': 'Signal Processing & Kinematics',
    'gesture-networks': 'Gesture Networks & DTW',
    'ai-methods': 'AI, Methods & Tools',
    'theory': 'Theory & Concepts',
    'clinical': 'Clinical & Development',
    'evolution': 'Evolution & Comparative',
    'social': 'Social Interaction',
    'learning': 'Learning & Education',
    'perception': 'Perception, Action & Cognition',
    'art': 'Art & Performance'
};

  const publications = [
    {
      year: 2024,
      title: "The human voice aligns with whole-body kinetics",
      authors: "Pouw, W., Werner, R., Burchardt, L. S., Selen, L.",
      journal: "BioArxiv",
      doi: "10.1101/2023.11.28.568991",
      status: "under major revision",
      themes: ["gesture-speech-physics", "biomechanics", "signal-processing"],
      abstract: "Humans use their voice concurrently with upper limb movements, known as hand gestures. Recently it has been shown that fluctuations in intensity and the tone of the human voice synchronizes with upper limb movement (including gesticulation). In this research direct evidence is provided that the voice changes with arm movements because it interacts with whole-body muscle activity (measured through surface EMG and postural measurements). We show that certain muscles (e.g., pectoralis major) that are associated with posture and upper limb movement are especially likely to interact with the voice. Adding wrist weights to increase the mass of the moving upper limb segment led to increased coupling between movement and voice. These results show that the voice co-patterns with whole-body kinetics relating to force, rather than kinematics, invoking several implications how the voice is biomechanically modeled, how it should be simulated, and importantly how the human voice must have evolved in relation to the whole-body motor system. We concluded that the human voice is animated by the kinetics of the whole body.",
      pdfUrl: "files/Pouwetalkinetics.pdf",
      imageUrl: "images/kineticsimage.PNG",
      openAccess: true,
      openData: "https://osf.io/xyz123",
      openCode: "https://wimpouw.github.io/kineticsvoice/",
      preregistration: "https://osf.io/abc456",
      rmarkdown: "https://wimpouw.github.io/kineticsvoice/"
    },
    {
      year: 2024,
      title: "Icons in Action: Redefining Iconicity for the Cognitive Sciences",
      authors: "Pouw, W.",
      journal: "PsyArxiv",
      doi: "10.31234/osf.io/ybu3h",
      status: "preprint",
      themes: ["theory"],
      abstract: "Iconicity is a term used in cognitive science and gesture studies to denote an informative relation between the form of an utterance and the meaning of that utterance. With good iconic design, the form of an utterance can directly invite a suitable perceiver with a certain degree of initiation, to grasp a meaning in the right direction. Despite the now increasingly touted importance of iconicity for understanding human languages, it proves difficult to define more formally. When the term is defined, researchers tend to base iconicity on resemblances, such that A is iconic of B, if A resembles B in some relevant respect. In the philosophy of depiction fundamental issues have been raised against resemblance-based accounts. Even when barring such metaphysical issues, it has recently been argued that for all practical research purposes, a ’state-of-the-art’ definition of iconicity should also do away with resemblances. Instead iconicity is in the eye of the beholder (mind-to-world relation)  as opposed to a property of the environment (world-to-mind relation). In this paper I suggest for all practical purposes that there is an alternative explanatory route available to us, which is paved more broadly by 4E approaches (embodied, embedded, enactive, extended) and the philosophy of depiction. Taking this road should lead to a 'distributed' view, where iconicity arises in a niche-constructed organism-environment system. This paper provides the bare bones for such a view, broadening the discussion, and hopefully drawing other perspectives in so that a distributed view of iconicity can become fully fleshed out.",
      pdfUrl: "files/IconsInAction.pdf",
      imageUrl: "images/IconsInAction.PNG",
      openAccess: true,
      openData: null
      },

      {
            year: 2024,
            title: "Landscapes of coarticulation: The co-structuring of gesture-vocal dynamics in Karnatak vocal performance",
            authors: "Pearson, L., Nuttall, T., Pouw, W.",
            journal: "PsyArxiv",
            doi: "10.31234/osf.io/npm96",
            status: "under major revision",
            themes: ["art", "signal-processing", "gesture-networks"],
            abstract: "In music performance contexts, vocalists tend to gesture in ways that show both similarities and idiosyncrasies across performers. We present a quantitative analysis and visualisation pipeline that characterises the multidimensional codependencies of spontaneous body movements and vocalisations in vocal performers. We apply this pipeline to a dataset of performances within the Karnatak music tradition of South India, including audio and motion tracking data, openly published with this report. Our results show that time-varying features of head and hand gestures tend to be more similar when the concurrent vocal time-varying features are also more similar. While for each performer we find clear co-structuring of sound and movement, they each show their own characteristic salient dimensions (e.g., hand position, head acceleration) on which movement is coarticulated with singing. Our analyses thereby provide a computational characterisation of each performer’s unique multimodal coarticulations with singing. The results support our conceptual contribution of widening the conception of coarticulation, from within a ‘modality’ (e.g., speech articulator positions, joint angles in reaching), to a multimodal coarticulation constrained by both physiological and aesthetic ‘control parameters’ that reduce degrees of freedom of the multimodal performance such that motifs that sound alike tend to co-structure with gestures that move alike.",
            pdfUrl: "files/Pearsonetal2024.pdf",
            imageUrl: "gifs/example_dashboard.gif",
            openAccess: true,
            openData: null, 
            preregistration: null,
            rmarkdown: null,
            jupyterNotebook: null,
            dashboard: "https://tsg-131-174-75-200.hosting.ru.nl/karnatak/"
      },

      {
            year: 2024,
            title: "There is a power law of joint communicative effort and it reflects communicative work",
            authors: "Bögels, S., Li, T., Rasenberg, M., Eijk, L., Toni, I., Pouw, W.",
            journal: "PsyArxiv",
            doi: "10.31234/osf.io/k8se5",
            status: "under major revision",
            themes: ["social", "signal-processing"],
            abstract: "A drive towards efficiency seems to regulate communicative processes and ultimately language change. In line with efficiency principles, signed, spoken, and/or gestural utterances tend to reduce in overall effort over repeated referrals in referential tasks. Such reduction is often studied in individuals, using a single communicative modality. Here we seek to understand reduction of communicative effort in its natural communicative environment, i.e. during multimodal and collaborative face-to-face dialogues about displaced referents. We ascertain that the reduction in joint effort over repeated referrals actually follows a negative power relationship. This reduction in communicative effort is multimodal, occurring across gesture, speech, prosody, and turn taking, and it is interactive, based on joint effort. The effect is robust, being confirmed through a reanalysis of published datasets about (individual) effort reduction. Crucially, the effect is also communicatively relevant. The coefficient of the power relationship predicts change and convergence in interlocutors’ conceptualizations of the communicative referents. Assuming that the coefficient of the negative power relationship reflects how well effort translates into mutual understanding - a process we call communicative work - we suggest that the power function captures a complementary strategy of increasing initial exploration and applying efficient selection for an effective joint conceptualization of referents. The current report invites linguistic theory, agent-based modeling, and experimental psychological inquiries into understanding the general principles of what could amount to a ‘power law of joint communicative work’.",            pdfUrl: "files/Bogelsetal2024.pdf",
            imageUrl: "images/effortreduction.PNG",
            openAccess: true,
            openData: "https://github.com/WimPouw/putting_in_the_effort_CABB",
            openCode: "https://github.com/WimPouw/putting_in_the_effort_CABB",
            preregistration: "https://osf.io/n56qd/",
            rmarkdown: null,
      },
      {
            year: 2024,
            title: "Amplitude Increases of Vocalizations are Associated with Body Accelerations in Siamang (Symphalangus syndactylus)",
            authors: "Pouw, W., Kehy, M., Gamba, M., Ravignani, A.",
            journal: "EcoEvoRxiv",
            doi: "10.32942/X2C595",
            status: "under major revision", 
            themes: ["evolution", "gesture-speech-physics", "signal-processing"],
            abstract: "Siamangs (Symphalangus syndactylus), one of the few singing apes, vocalize loudly, often while they move. We hypothesize that movement and vocalization coordinate, possibly due to vigorous thorax-loading movements such as brachiation affecting vocal-respiratory dynamics. To assess this vocal-motor coordination we recorded more than a hundred stereotypical vocalizations combined with movement from two captive Siamang (isolated from 7 hours of singing). We observed that stereotypical calls coincided with a movement display and were performed by juvenile individuals during solo singing (which allowed for isolation of the calls). Investigating these vocal-motor events, we found that body acceleration estimated using computer vision was statistically associated with the nearest peak in the amplitude envelope of the call, and that body acceleration timeseries contained mutual information about the amplitude envelope timeseries during these events. By confirming via quantitative methods that singing and movement are coordinated, the current report invites further mechanistic investigation on vocal-locomotor coupling in siamang.",
            pdfUrl: "/files/PouwetalSiamangAmp.pdf",
            imageUrl: "images/siamangamp.PNG",
            openAccess: true,
            openData: "https://github.com/WimPouw/siamang_physical_constraints_code_repo",
            openCode: "https://github.com/WimPouw/siamang_physical_constraints_code_repo",
            dashboard: "https://tsg-131-174-75-200.hosting.ru.nl/siamang/",
      },
      {
        year: 2024,
        title: "A cross-species framework for classifying sound-movement couplings",
        authors: "Leonetti, S., Ravignani, A., Pouw, W.",
        journal: "Neuroscience and Biobehavioral Reviews",
        doi: "10.1016/j.neubiorev.2024.105911",
        status: null,
        themes: ["evolution", "theory", "biomechanics"],
        abstract: "Sound and movement are entangled in animal communication. This is obviously true in the case of soundconstituting vibratory movements of biological structures which generate acoustic waves. A little less obvious is that other moving structures produce the energy required to sustain these vibrations. In many species, the res- piratory system moves to generate the expiratory flow which powers the sound-constituting movements (soundpowering movements). The sound may acquire additional structure via upper tract movements, such as articulatory movements or head raising (sound-filtering movements). Some movements are not necessary for sound production, but when produced, impinge on the sound-producing process due to weak biomechanical coupling with body parts (e.g., respiratory system) that are necessary for sound production (sound-impinging movements). Animals also produce sounds contingent with movement, requiring neuro-physiological control regimes allowing to flexibly couple movements to a produced sound, or coupling movements to a perceived external sound (sound-contingent movement). Here, we compare and classify the variety of ways sound and movements are coupled in animal communication; our proposed framework should help structure previous and future studies on this topic.",         pdfUrl: "files/LeonettiRavignaniPouw2024.pdf",
        imageUrl: "images/LeonettiNBR.PNG",
        openAccess: true,
        openData: null
      },
  
      {
            year: 2024,
            title: "Learning co-speech gesture representations in dialogue through contrastive learning: An intrinsic evaluation",
            authors: "Ghaleb, E., Khaertdinov, B., Pouw, W., Rasenberg, M., Holler, J., Özyürek, A., Fernández, R.",
            journal: "Proceedings of the 26th ACM International Conference on Multimodal Interaction (ICMI2024)",
            doi: "10.1145/3678957.3685707",
            status: null,
            themes: ["ai-methods", "gesture-networks", "signal-processing"],
            abstract: "In face-to-face dialogues, the form-meaning relationship of cospeech gestures varies depending on contextual factors such as what the gestures refer to and the individual characteristics of speakers. These factors make co-speech gesture representation learning challenging. How can we learn meaningful gestures representations considering gestures’ variability and relationship with speech? This paper tackles this challenge by employing self-supervised contrastive learning techniques to learn gesture representations from skeletal and speech information. We propose an approach that includes both unimodal and multimodal pre-training to ground gesture representations in co-occurring speech. For training, we utilize a face-to-face dialogue dataset rich with representational iconic gestures. We conduct thorough intrinsic evaluations of the learned representations through comparison with human-annotated pairwise gesture similarity. Moreover, we perform a diagnostic probing analysis to assess the possibility of recovering interpretable gesture features from the learned representations. Our results show a signifcant positive correlation with human-annotated gesture similarity and reveal that the similarity between the learned representations is consistent with well-motivated patterns related to the dynamics of dialogue interaction. Moreover, our fndings demonstrate that several features concerning the form of gestures can be recovered from the latent representations. Overall, this study shows that multimodal contrastive learning is a promising approach for learning gesture representations, which opens the door to using such representations in larger-scale gesture analysis studies.",
            pdfUrl: "files/GhalebetalICMI2024.pdf",
            imageUrl: "images/Ghalebetal2024.PNG",
            openAccess: false,
            openData: 'https://github.com/EsamGhaleb/Learning-Co-Speech-Gesture-Representations',
            openCode: 'https://github.com/EsamGhaleb/Learning-Co-Speech-Gesture-Representations'
      },
      
      {
            year: 2024,
            title: "MaskAnyone toolkit: Offering strategies for minimizing privacy risks and maximizing utility in audio-visual data archiving",
            authors: "Owoyele, B. A., Schilling, M., Sawahn, Rohan, Kaemer, N., Zherebenkov, P., Verma, B., Pouw, W., de Melo, G.",
            journal: "Proceedings of the 2024 International Conference on Information Systems",
            doi: "https://arxiv.org/abs/2408.03185",
            status: null,
            themes: ["ai-methods"],
            abstract: "This paper introduces MaskAnyone, a novel toolkit designed to navigate some privacy and ethical concerns of sharing audio-visual data in research. MaskAnyone offers a scalable, user-friendly solution for de-identifying individuals in video and audio content through face-swapping and voice alteration, supporting multi-person masking and real-time bulk processing. By integrating this tool within research practices, we aim to enhance data reproducibility and utility in social science research. Our approach draws on Design Science Research, proposing that MaskAnyone can facilitate safer data sharing and potentially reduce the storage of fully identifiable data. We discuss the development and capabilities of MaskAnyone, explore its integration into ethical research practices, and consider the broader implications of audio-visual data masking, including issues of consent and the risk of misuse. The paper concludes with a preliminary evaluation framework for assessing the effectiveness and ethical integration of masking tools in such research settings.",
            pdfUrl: "files/OwoyeleetalMaskAnyoneToolkit2024.pdf",
            imageUrl: "images/Maskanyone.PNG",
            openAccess: true,
            openCode: "https://github.com/MaskAnyone/MaskAnyone"
      },
      
      {
            year: 2024,
            title: "Deliberate synchronization of speech and gesture: Effects of neurodiversity and development",
            authors: "Eigsti, I., Pouw, W.",
            journal: "Language and Cognition",
            doi: "10.1017/langcog.2024.33",
            status: null,
            themes: ["clinical", "biomechanics", "signal-processing"],
            abstract: "The production of speech and gesture is exquisitely temporally coordinated. In autistic individuals, speech-gesture synchrony during spontaneous discourse is disrupted. To evaluate whether this asynchrony reflects motor coordination versus language production processes, the current study examined deliberately performed hand movements during speech in youth with autism spectrum disorder (ASD) compared to neurotypical youth. Neurotypical adult performance provided a mature baseline. Participants read aloud rhythmic nursery rhymes, while producing a beat-like hand movement. An automated pixel-change video measure identified kinematic peaks; using smoothed acoustic envelope analyses, we identified peaks in speech. Results indicated few diagnostic group differences in explicit speech-movement coordination, although adolescent performance differed from adults. Adults demonstrated higher tempo and greater rhythmicity in their coordination; this group difference suggests that the method is sufficiently subtle to reveal individual differences and that this form of complex coordination undergoes ongoing maturation beyond adolescence. The sample is small, and thus results are necessarily preliminary. In the context of prior speech-gesture coordination studies, these findings of intact synchrony are consistent with the hypothesis that it is the demands of discourse planning, rather than motor coordination, that have led to prior findings of asynchrony during spontaneous speech; this possibility awaits future research.",
            pdfUrl: "files/EigstiPouw2024.pdf",
            imageUrl: "images/Eigsti2024.PNG",
            openAccess: true,
            openData: "https://osf.io/kcr8x/?view_only=78f9002ac67543ea81458c1a394e5363"
      },
      
      {
            year: 2024,
            title: "A toolkit for the dynamic study of air sacs in siamang and other elastic circular structures",
            authors: "Burchardt, L. B., van de Sande, Y., Kehy, M., Gamba, M., Ravignani, A., Pouw, W.",
            journal: "PLOS Computational Biology",
            doi: "10.1371/journal.pcbi.1012222",
            status: null,
            themes: ["ai-methods", "evolution", "signal-processing"],
            abstract: "Biological structures are defined by rigid elements, such as bones, and elastic elements, like muscles and membranes. Computer vision advances have enabled automatic tracking of moving animal skeletal poses. Such developments provide insights into complex time-varying dynamics of biological motion. Conversely, the elastic soft-tissues of organisms, like the nose of elephant seals, or the buccal sac of frogs, are poorly studied and no computer vision methods have been proposed. This leaves major gaps in different areas of biology. In primatology, most critically, the function of air sacs is widely debated; many open questions on the role of air sacs in the evolution of animal communication, including human speech, remain unanswered. To support the dynamic study of soft-tissue structures, we present a toolkit for the automated tracking of semi-circular elastic structures in biological video data. The toolkit contains unsupervised computer vision tools (using Hough transform) and supervised deep learning (by adapting DeepLabCut) methodology to track inflation of laryngeal air sacs or other biological spherical objects (e.g., gular cavities). Confirming the value of elastic kinematic analysis, we show that air sac inflation correlates with acoustic markers that likely inform about body size. Finally, we present a pre-processed audiovisual-kinematic dataset of 7+ hours of closeup audiovisual recordings of siamang (Symphalangus syndactylus) singing. This toolkit (https://github.com/WimPouw/AirSacTracker) aims to revitalize the study of non-skeletal morphological structures across multiple species.",
            pdfUrl: "files/BurchardtetalPLOSCOMP2024.pdf",
            imageUrl: "gifs/air_sac_output_with_sound.gif",
            openAccess: true,
            openData: "https://github.com/WimPouw/AirSacTracker",
            openCode: "https://github.com/WimPouw/AirSacTracker"
      },
      
      {
            year: 2024,
            title: "On the relation between leg-motion rate and speech tempo during submaximal cycling exercise",
            authors: "Weston, H., Pouw, W., Fuchs, S.",
            journal: "Journal of Speech, Language, and Hearing Research",
            doi: "10.1044/2023_JSLHR-23-00178",
            status: null,
            themes: ["biomechanics", "signal-processing"],
            abstract: "Purpose: This study investigated whether temporal coupling was present between lower limb motion rate and different speech tempi during different exercise intensities. We hypothesized that increased physical workload would increase cycling rate and that this could account for previous findings of increased speech tempo during exercise. We also investigated whether the choice of speech task (read vs. spontaneous speech) affected results. Method: Forty-eight women who were ages 18–35 years participated. A within-participant design was used with fixed-order physical workload and counterbalanced speech task conditions. Motion capture and acoustic data were collected during exercise and at rest. Speech tempo was assessed using the amplitude envelope and two derived intrinsic mode functions that approximated syllable-like and footlike oscillations in the speech signal. Analyses were conducted with linear mixed-effects models. Results: No direct entrainment between leg cycling rate and speech rate was observed. Leg cycling rate significantly increased from low to moderate workload for both speech tasks. All measures of speech tempo decreased when participants changed from rest to either low or moderate workload. Conclusions: Speech tempo does not show temporal coupling with the rate of self-generated leg motion at group level, which highlights the need to investigate potential faster scale momentary coupling. The unexpected finding that speech tempo decreases with increased physical workload may be explained by multiple mental and physical factors that are more diverse and individual than anticipated. The implication for real-world contexts is that even light physical activity—functionally equivalent to walking—may impact speech tempo.",            pdfUrl: "files/Westonetal2024.pdf",
            imageUrl: "images/Weston.PNG",
            openAccess: true,
            openData: "https://github.com/sfuchs18/movementspeechtempo_public",
            openCode: "https://github.com/sfuchs18/movementspeechtempo_public"
      },
      
      {
            year: 2024,
            title: "Arm movements increase acoustic markers of expiratory flow",
            authors: "Werner, R., Selen, L., Pouw, W.",
            journal: "Proceedings of the International Conference of Speech Prosody (Speech Prosody 2024)",
            doi: "10.1101/2024.01.08.574611",
            status: null,
            themes: ["gesture-speech-physics", "biomechanics"],
            abstract: "The gesture-speech physics theory suggests that there are biomechanical interactions of the voice with the whole body, driving speech to align fluctuations in loudness and F0 with upper-limb movement. This exploratory study offers a possible falsification of the gesture-speech physics theory, which would predict effects of upper-limb movement on voice as well as respiration. We therefore investigate co-movement expiration. 17 participants were asked to produce a continuous exhalation for several seconds. After 3s, they execute one of five within-subject movement conditions with their arm with and without a wrist weight (no movement, elbow flexion, elbow extension, internal arm rotation, external arm rotation). We analyzed the smoothed amplitude envelope of the acoustic signal in relation to arm movement. Compared to no movement, all four movements lead to higher positive peaks in the amplitude peaks, while weight did not influence the amplitude. We also found that across movement conditions, positive amplitude peaks are structurally timed relative to peaks in kinematics (speed, acceleration). We conclude that the reason why upper-limb movements affect voice loudness is best understood through gesturespeech physics theory, where upper-limb movements affect the voice directly by modulating sub-glottal pressures. Multimodal prosody is thus partly literally embodied.",             pdfUrl: "files/WernerSpeechProsody2024_final.pdf",
            imageUrl: "images/Werner.PNG",
            openAccess: true,
            openCode: "https://wimpouw.github.io/gesturekinetics_expiration/",
            rmarkdown: "https://wimpouw.github.io/gesturekinetics_expiration/"
      },
      {
        year: 2024,
        title: "Movement-related muscle activity and kinetics affect vocalization amplitude",
        authors: "Pouw, W., Burchardt, L. S., Werner, R., Selen, L.",
        journal: "Proceedings of the International Conference on the Evolution of Language (EVOLANG2024)",
        doi: "10.17617/2.3587960",
        status: null,
        themes: ["gesture-speech-physics", "biomechanics", "evolution"],
        abstract: "Voice production can be a whole-body affair: Upper limb movements physically impact the voice in steady-state vocalization, speaking, and singing. This is supposedly due to biomechanical impulses on the chest-wall, affecting subglottal pressure. Unveiling such biomechanics is important, as humans gesture with their hands in a synchronized way with speaking. Here we assess biomechanical interactions between arm movements and the voice, by measuring activity of respiratory-related muscles during different types of upper limb movement. We show that positive peaks in the voice’s amplitude increase with movements and more so with a 1 kg weight attached to the wrist. We further report exploratory findings that gesture-related muscle activations scale with positive peaks in the voice’s amplitude. These results indicate that the voice aligns with the forces generated by the body and implies that the voice evolved in the context of bodily action.",         pdfUrl: "files/PouwetalEVOLANG2024.pdf",
        imageUrl: "images/Pouwevolang.PNG",
        openAccess: true,
        openData: "https://osf.io/xyz123",
        openCode: "https://wimpouw.github.io/kineticsvoice/",
        preregistration: "https://osf.io/abc456",
        rmarkdown: "https://wimpouw.github.io/kineticsvoice/"
  },
  
  {
        year: 2024,
        title: "Exploring the sound structure of novel vocalizations",
        authors: "Fuchs, S., Kadavá, Š., Pouw, W., Walker, B., Fay, N., Winter, B., Cwiek, A.",
        journal: "Proceedings of the International Conference on the Evolution of Language (EVOLANG2024)",
        doi: "https://evolang2024.github.io/proceedings/evolang15_proceedings.pdf",
        status: null,
        themes: ["evolution", "signal-processing"],
        abstract: "When humans speak or animals vocalize, they can produce sounds that are further combined into larger sequences. The flexibility of sound combinations into larger meaningful sequences is one of the hallmarks of human language. To some extent, this has also been found in other species, like chimpanzees and birds. The current study investigates the structure of sounds when speakers are asked to communicate the meaning of 20 selected concepts without using language. Our results show that the structure of sounds between pauses is frequently limited to 1–3 sounds. This structure is less complex than when humans use their native language. The acoustic distance between sounds depends largely on the concept apart from concepts referring to animals, which show a higher diversity of involved sounds. This exploratory analysis might provide evidence of how the structure of sound could have changed from simple to complex in evolution.",         pdfUrl: "files/FuchsetalEVOLANG2024.pdf",
        imageUrl: "images/fuchsevolang.PNG",
        openAccess: true,
        openData: "https://github.com/sarkadava/Evolang2024_SoundSimilarity",
        openCode: "https://github.com/sarkadava/Evolang2024_SoundSimilarity"
  },
  
  {
        year: 2024,
        title: "What do we mean when we say gestures are more expressive than vocalizations? An experimental and simulation study",
        authors: "Kadavá, Š., Cwiek, A., Fuchs, S., Pouw, W.",
        journal: "Proceedings of the annual meeting of the Cognitive Science Society",
        doi: 'https://escholarship.org/uc/item/2mp1v3v5',
        status: null,
        themes: ["evolution"],
        abstract: "In this work we discuss the complexity surrounding the origins of human language. We focus on the debate between gesturefirst and vocalization-first theories. While some evidence supports the idea that gestures played a primary role in early communication, others argue that vocalizations are equally expressive. We think that methodological differences and biases in the choice of concepts may contribute to the challenge of comparing these modalities directly. For example, to what extent does selecting a certain concept from a semantic category matter to reproduce an effect? This and similar questions are explored in a data-driven way. First, we provide ratings on imagined expressibility of 207 concepts from an online experiment showing that people tend to rate gesture modality as better in expressing meaning compared to vocal modality. Second, we use the Bayesian posterior predictive distribution of these ratings to simulate new experiments where we vary the number of participants, number of concepts, and semantic categories to investigate how robust is the difference between gesture and vocal modality. Our results show that gesture modality is reliably different (i.e., affords higher expressibility) than vocal modality. However, the difference between the two is limited in terms of effect size (medium sizes by common standards) so one may question whether this difference is meaningful for bigger claims about early language evolution. This study further provides valuable information for further research on how to select stimuli and how to set up one’s design in a balanced way.",        pdfUrl: "files/KadavaCogsci2024.pdf",
        imageUrl: "images/KadavaCogsci2024.PNG",
        openAccess: true,
        openData: "https://osf.io/xjsrk/?view_only=ec67ae0981e8486cad64b28d44007ef2",
        openCode: "https://osf.io/xjsrk/?view_only=ec67ae0981e8486cad64b28d44007ef2"
  },
  
  {
        year: 2024,
        title: "Analysing cross-speaker convergence through the lens of automatically detected shared linguistic constructions",
        authors: "Ghaleb, E., Rasenberg, M., Pouw, W., Holler, J., Toni, I., Özyürek, A., Fernández, R.",
        journal: "Proceedings of the annual meeting of the Cognitive Science Society",
        doi: "https://escholarship.org/uc/item/43h970fc",
        status: null,
        themes: ["ai-methods", "social"],
        abstract: "Conversation requires a substantial amount of coordination between dialogue participants, from managing turn taking to negotiating mutual understanding. Part of this coordination effort surfaces as the reuse of linguistic behaviour across speakers, a process often referred to as alignment. While the presence of linguistic alignment is well documented in the literature, several questions remain open, including the extent to which patterns of reuse across speakers have an impact on the emergence of labelling conventions for novel referents. In this study, we put forward a methodology for automatically detecting shared lemmatised constructions—expressions with a common lexical core used by both speakers within a dialogue—and apply it to a referential communication corpus where participants aim to identify novel objects for which no established labels exist. Our analyses uncover the usage patterns of shared constructions in interaction and reveal that features such as their frequency and the amount of different constructions used for a referent are associated with the degree of object labelling convergence the participants exhibit after social interaction. More generally, the present study shows that automatically detected shared constructions offer a useful level of analysis to investigate the dynamics of reference negotiation in dialogue.",         pdfUrl: "files/GhalebCogsciProc2024.pdf",
        imageUrl: "images/GhalebCogsci2024.PNG",
        openAccess: true,
        openData: "https://github.com/EsamGhaleb/SharedLinguisticConstructions",
        openCode: "https://github.com/EsamGhaleb/SharedLinguisticConstructions"
  },
  {
        year: 2024,
        title: "Automated recognition of grooming behavior in wild chimpanzees",
        authors: "Van de Sande, Y., Pouw, W., Southern, L.",
        journal: "Proceedings of the annual meeting of the Cognitive Science Society",
        doi: "https://escholarship.org/uc/item/27c0v604",
        status: null,
        themes: ["ai-methods", "evolution"],
        abstract: "Video recording is a widely used tool for studying animal behavior, especially in fields such as primatology. Primatologists rely on video data to analyze and research topics such as social grooming to uncover subtle mechanisms behind complex social behavior and structures. Insights into these social behaviors may provide us with a better understanding of our closest living relatives, but also new theories and insights into our own behavior. However, analyzing this type of data using manual annotation is currently a time-consuming task. Here we present an end-to-end pipeline to track chimpanzee (Pan troglodytes) poses using DeepLabCut (DLC) which then serves as input to a support vector machine. This classifier was trained to detect role transitions within grooming interactions. We replicate a recent study showing that DLC has usability value for chimpanzee data collected in natural environments. Our combined method of tracking and classification is remarkably successful in detecting the presence of grooming, indicating the directionality and a change in turn with an accuracy above 86% on unseen videos. We can identify particular pose features used in the classification of grooming, which will contribute to the exploration of turn-taking dynamics on a scale that would otherwise be difficult to attain with traditional methods. Finally, our pipeline can in principle be applied to recognize a variety of other socially interactive behaviors that are largely recognizable by (joint) postural states.",        pdfUrl: "files/VanderSande2024.pdf",
        imageUrl: "images/SandeCogsci.PNG",
        openAccess: true,
        openData: null
  },
  {
    year: 2023,
    title: "A kinematic-acoustic analysis of gesture-speech coupling in aphasia",
    authors: "Jenkins, T., Pouw, W.",
    journal: "Journal of Experimental Psychology: General",
    doi: "10.1037/xge0001346",
    status: null,
    themes: ["clinical", "gesture-speech-physics", "signal-processing"],
    abstract: "Aphasia is a profound language pathology hampering speech production and/or comprehension. People With Aphasia (PWA) use more manual gestures than Non-Brain Injured (NBI) individuals. This intuitively invokes the idea that gesture is compensatory in some way, but there is variable evidence of a gesture-boosting effect on speech processes. The status quo in gesture research with PWA is an emphasis on categorical analysis of gesture types, focusing on how often they are recruited, and whether more or less gesturing aids communication or speaking. However, there are increasingly louder calls for the investigation of gesture and speech as continuous entangled modes of expression. In NBI adults, expressive moments of gesture and speech are synchronized on the prosodic level. It has been neglected how this multimodal prosody is instantiated in PWA. In the current study, we perform the first acoustic-kinematic gesture–speech analysis in Persons With Aphasia (i.e., Wernicke’s, Broca’s, Anomic) relative to agematched controls, where we apply several multimodal signal analysis methods. Specifically, we related the speech peaks (smoothed amplitude envelope change) with that of the nearest peaks in the gesture acceleration profile. We obtained that the magnitude of gesture versus speech peaks are positively related across the groups, though more variably for PWA, and such coupling was related to less severe Aphasiarelated symptoms. No differences were found between controls and PWA in terms of temporal ordering of speech envelope versus acceleration peaks. Finally, we show that both gesture and speech have slower quasi-rhythmic structure, indicating that next to speech, gesture is slowed down too. The current results indicate that there is a basic gesture–speech coupling mechanism that is not fully reliant on core linguistic competences, as it is found relatively intact in PWA. This resonates with a recent biomechanical theory of gesture, which renders gesture-vocal coupling as fundamental and a priori to the (evolutionary) development of core linguistic competences.",
    pdfUrl: "files/jenkinspouwAphasia2023.pdf",
    imageUrl: "images/pouwjenkins.png",
    openAccess: false,
    openCode: "https://osf.io/bwfmp/?view_only=",
    openData: "https://osf.io/bwfmp/?view_only="
},

{
    year: 2023,
    title: "Is gesture-speech physics at work in rhythmic pointing? Evidence from Polish counting-out rhymes",
    authors: "Kadavá, Š., Cwiek, A., Fuchs, S., Pouw, W.",
    journal: "Proceedings of the 20th International Congress of Phonetic Sciences",
    doi: "https://guarant.cz/icphs2023/955.pdf",
    status: null,
    themes: ["gesture-speech-physics", "signal-processing"],
    abstract: "‘Gesture-speech physics’ refers to a possible biomechanical coupling between manual gesture and speech. According to this thesis, rapid gesturing leaves a direct imprint on acoustics (intensity, F0), as gesture accelerations/decelerations increase expiratory forces and therefore subglottal pressure, leading to higher amplitude envelope peaks and higher F0 values. This acoustic effect has been reported in lab experiments, spontaneous speech, clinical studies, and professional vocal performers. The current study investigates this phenomenon in Polish counting-out rhymes, using motion capture data and acoustic recordings from 11 native Polish speakers. Following the gesture-speech physics thesis, we expect acceleration/deceleration peaks to be correlated with speech intensity/F0. Through Bayesian analyses, we obtained a weak but reliable coupling of deceleration of the pointing hand and the nearest peak in the smoothed amplitude envelope.",     pdfUrl: "files/KadavaetalICPHS2023.pdf",
    imageUrl: "images/kadavaicphs.PNG",
    openAccess: true,
    openData: "https://osf.io/2abtd/",
    openCode: "https://osf.io/2abtd/"
},

{
    year: 2023,
    title: "A roadmap for technological innovation in multimodal communication research",
    authors: "Gregori, A., Amici F., Brilmayer, I., Cwiek, O., Fritzsche L., Fuchs, S, Henlein, A., Herbort O., Kügler F., Lemanski, J., Liebal, K., Lücking A., Mehler, A., Nguyen K. T., Pouw, W., Prieto, P., Rohrer P., Sanchez-Ramon P.G., Schulte-Rüther, M., Schumacher, P., Schweinberger S., Struckmeier V., Trettenbrein P., von Eiff, C.",
    journal: "Digital Human Modeling and Applications in Health, Safety, Ergonomics and Risk Management. HCII 2023. Lecture Notes in Computer Science",
    doi: "10.1007/978-3-031-35748-0_30",
    status: null,
    themes: ["ai-methods", "theory"],
    abstract: "Multimodal communication research focuses on how different means of signalling coordinate to communicate effectively. This line of research is traditionally influenced by fields such as cognitive and neuroscience, human-computer interaction, and linguistics. With new technologies becoming available in fields such as natural language processingand computer vision, the field can increasingly avail itself of new ways of analyzing and understanding multimodal communication. As a result, othere is a general hope that multimodal research may be at the “precipice of greatness” due to technological advances in computer science and resulting extended empirical coverage. However, for this to come about there must be sufficient guidance on key (theoretical) needs of innovation in the field of multimodal communication. Absent such guidance, the research focus of computer scientists might increasingly diverge from crucial issues in multimodal communication. With this paper, we want to further promote interaction between these fields, which may enormously benefit both communities. The multimodal research community (represented here by a consortium of researchers from the Visual Communication [ViCom] Priority Programme) can engage in the innovation by clearly stating which technological tools are needed to make progress in the field of multimodal communication. In this article, we try to facilitate the establishment of a much needed common ground on feasible expectations (e.g., in terms of terminology and measures to be able to train machine learning algorithms) and to critically reflect possibly idle hopes for technical advances, informed by recent successes and challenges in computer science, social signal processing, and related domains.",
    pdfUrl: "files/Gregorietal2023ac.pdf",
    imageUrl: "images/conspaper.PNG",
    openAccess: false,
    openData: null
},

{
    year: 2023,
    title: "Co-Speech gesture detection through multi-phase sequence labeling",
    authors: "Ghaleb, E., Burenko, I., Rasenberg, M., Pouw, W., Uhrig, P., Holler, J., Toni, I., Ozyurek, O., Fernández, R.",
    journal: "IEEE/CVF Winter Conference on Applications of Computer Vision",
    doi: "10.48550/arXiv.2308.10680",
    status: null,
    themes: ["ai-methods", "signal-processing"],
    abstract: "Gestures are integral components of face-to-face communication. They unfold over time, often following predictable movement phases of preparation, stroke, and retraction. Yet, the prevalent approach to automatic gesture detection treats the problem as binary classification, classifying a segment as either containing a gesture or not, thus failing to capture its inherently sequential and contextual nature. To address this, we introduce a novel framework that reframes the task as a multi-phase sequence labeling problem rather than binary classification. Our model processes sequences of skeletal movements over time windows, uses Transformer encoders to learn contextual embeddings, and leverages Conditional Random Fields to perform sequence labeling. We evaluate our proposal on a large dataset of diverse co-speech gestures in task-oriented faceto-face dialogues. The results consistently demonstrate that our method significantly outperforms strong baseline models in detecting gesture strokes. Furthermore, applying Transformer encoders to learn contextual embeddings from movement sequences substantially improves gesture unit detection. These results highlight our framework’s capacity to capture the fine-grained dynamics of co-speech gesture phases, paving the way for more nuanced and accurate gesture detection and analysis.",     pdfUrl: "files/Ghalebetal2023.pdf",
    imageUrl: "images/GhalebWacv.PNG",
    openAccess: true,
    openCode: "https://github.com/EsamGhaleb/Multi-Phase-Gesture-Detection.1",
    openData: "https://github.com/EsamGhaleb/Multi-Phase-Gesture-Detection.1"
},
{
  year: 2022,
  title: "Masked-Piper: Masking personal identities in visual recordings while preserving multimodal information",
  authors: "Owoyele, B., Trujillo, J., De Melo, G., Pouw, W.",
  journal: "SoftwareX",
  doi: "10.1016/j.softx.2022.101236",
  status: null,
  themes: ["ai-methods"],
  abstract: "In this increasingly data-rich world, visual recordings of human behavior are often unable to be shared due to concerns about privacy. Consequently, data sharing in fields such as behavioral science, multimodal communication, and human movement research is often limited. In addition, in legal and other non-scientific contexts, privacy-related concerns may preclude the sharing of video recordings and thus remove the rich multimodal context that humans recruit to communicate. Minimizing the risk of identity exposure while preserving critical behavioral information would maximize utility of public resources (e.g., research grants) and time invested in audio–visual research. Here we present an open-source computer vision tool that masks the identities of humans while maintaining rich information about communicative body movements. Furthermore, this masking tool can be easily applied to many videos, leveraging computational tools to augment the reproducibility and accessibility of behavioral research. The tool is designed for researchers and practitioners engaged in kinematic and affective research. Application areas include teaching/education, communication and human movement research, CCTV, and legal contexts.",
  pdfUrl: "files/OwoyeleetalSOFTX2022.pdf",
  imageUrl: "images/MaskedPipers.PNG",
  openAccess: true,
  openCode: "https://github.com/ElsevierSoftwareX/SOFTX-D-22-00110",
  jupyterNotebook: "https://envisionbox.org/embedded_Mediapiping.html" 
},

{
  year: 2022,
  title: "Origins of vocal-entangled gesture",
  authors: "Pouw, W., Fuchs, S.",
  journal: "Neuroscience and Biobehavioral Reviews",
  doi: "10.1016/j.neubiorev.2022.104836",
  status: null,
  themes: ["gesture-speech-physics", "evolution", "theory"],
  abstract: "Gestures during speaking are typically understood in a representational framework: they represent absent or distal states of affairs by means of pointing, resemblance, or symbolic replacement. However, humans also gesture along with the rhythm of speaking, which is amenable to a non-representational perspective. Such a perspective centers on the phenomenon of vocal-entangled gestures and builds on evidence showing that when an upper limb with a certain mass decelerates/accelerates sufficiently, it yields impulses on the body that cascade in various ways into the respiratory–vocal system. It entails a physical entanglement between body motions, respiration, and vocal activities. It is shown that vocal-entangled gestures are realized in infant vocal–motor babbling before any representational use of gesture develops. Similarly, an overview is given of vocal-entangled processes in non-human animals. They can frequently be found in rats, bats, birds, and a range of other species that developed even earlier in the phylogenetic tree. Thus, the origins of human gesture lie in biomechanics, emerging early in ontogeny and running deep in phylogeny.",
  pdfUrl: "files/PouwFuchs2022.pdf",
  imageUrl: "images/PouwFuchsOrigins.PNG",
  openAccess: true,
  openData: null
},

{
  year: 2022,
  title: "The CABB dataset: A multimodal corpus of communicative interactions for behavioural and neural analyses",
  authors: "Eijk, L., Rasenberg, M, Arnese, F., Blokpoel, M., Dingemanse, M., Doeller, C., Ernestus, M., Holler, J., Milivojevic, B., Ozyurek, A., Pouw, W., van Rooij, I., Schriefers, H., Toni, I., Trujillo, J., Bogels, S.",
  journal: "NeuroImage",
  doi: "10.1016/j.neuroimage.2022.119734",
  status: null,
  themes: ["ai-methods", "signal-processing"],
  abstract: "We present a dataset of behavioural and fMRI observations acquired in the context of humans involved in multimodal referential communication. The dataset contains audio/video and motion-tracking recordings of face-to-face, task-based communicative interactions in Dutch, as well as behavioural and neural correlates of participants’ representations of dialogue referents. Seventy-one pairs of unacquainted participants performed two interleaved interactional tasks in which they described and located 16 novel geometrical objects (i.e., Fribbles) yielding spontaneous interactions of about one hour. We share high-quality video (from three cameras), audio (from head-mounted microphones), and motion-tracking (Kinect) data, as well as speech transcripts of the interactions. Before and after engaging in the face-to-face communicative interactions, participants’ individual representations of the 16 Fribbles were estimated. Behaviourally, participants provided a written description (one to three words) for each Fribble and positioned them along 29 independent conceptual dimensions (e.g., rounded, human, au- dible). Neurally, fMRI signal evoked by each Fribble was measured during a one-back working-memory task. To enable functional hyperalignment across participants, the dataset also includes fMRI measurements obtained during visual presentation of eight animated movies (35 min total). We present analyses for the various types of data demonstrating their quality and consistency with earlier research. Besides high-resolution multimodal in- teractional data, this dataset includes different correlates of communicative referents, obtained before and after face-to-face dialogue, allowing for novel investigations into the relation between communicative behaviours and the representational space shared by communicators. This unique combination of data can be used for research in neuroscience, psychology, linguistics, and beyond.",
  pdfUrl: "files/CABBdatasetpaper2022.pdf",
  imageUrl: "images/fribbles.PNG",
  openAccess: true,
  openData: "https://data.ru.nl/",
  openCode: "https://data.ru.nl/"
},

{
  year: 2022,
  title: "The importance of visual control and biomechanics in the regulation of gesture-speech synchrony for an individual deprived of proprioceptive feedback of body position",
  authors: "Pouw, W., Harrison, S. J., Dixon, J. A.",
  journal: "Scientific Reports",
  doi: "10.1038/s41598-022-18300-x",
  status: null,
  themes: ["gesture-speech-physics", "biomechanics", "clinical"],
  abstract: "Do communicative actions such as gestures fundamentally differ in their control mechanisms from other actions? Evidence for such fundamental differences comes from a classic gesture‑speech coordination experiment performed with a person (IW) with deafferentation (McNeill, 2005). Although IW has lost both his primary source of information about body position (i.e., proprioception) and discriminative touch from the neck down, his gesture‑speech coordination has been reported to be largely unaffected, even if his vision is blocked. This is surprising because, without vision, his object-directed actions almost completely break down. We examine the hypothesis that IW’s gesture‑speech coordination is supported by the biomechanical effects of gesturing on head posture and speech. We find that when vision is blocked, there are micro‑scale increases in gesture‑speech timing variability, consistent with IW’s reported experience that gesturing is difficult without vision. Supporting the hypothesis that IW exploits biomechanical consequences of the act of gesturing, we find that: (1) gestures with larger physical impulses co‑occur with greater head movement, (2) gesture‑speech synchrony relates to larger gesture‑concurrent head movements (i.e. for bimanual gestures), (3) when vision is blocked, gestures generate more physical impulse, and (4) moments of acoustic prominence couple more with peaks of physical impulse when vision is blocked. It can be concluded that IW’s gesturing ability is not based on a specialized language‑based feedforward control as originally concluded from previous research, but is still dependent on a varied means of recurrent feedback from the body.",
  pdfUrl: "files/Pouwetalscirep2022.pdf",
  imageUrl: "images/IW1.PNG",
  openAccess: true,
  openData: "https://osf.io/q98n5/",
  openCode: "https://osf.io/q98n5/"
},

{
  year: 2022,
  title: "What you hear and see specifies the perception of a limb-respiratory-vocal act (commentary)",
  authors: "Pouw, W., Dixon, J. A.",
  journal: "Proceedings of the Royal Society B",
  doi: "10.1098/rspb.2022.1026",
  status: null,
  themes: ["gesture-speech-physics", "theory"],
  abstract: "Bosker & Peeters [1] report an extensive and well-executed demonstration of how perception of vocalic aspects of speech is a multimodal affair that can be instantiated by visual information about co-speech upper limb movement. This discovery of a ‘gesture McGurk effect’ (see also [2]) can be considered as a fascinating extension of the classic McGurk effect which is originally obtained in relation to articulatory aspects of speech perception. Instead, the authors interpret their discovery as a logically distinct phenomenon.",
  pdfUrl: "files/PouwDixon2022commentary.pdf",
  imageUrl: null,
  openAccess: true,
  openData: null
},

{
  year: 2022,
  title: "Gesture-vocal Coupling in Karnatak Music Performance: A Neuro-bodily Distributed Aesthetic Entanglement",
  authors: "Pearson, L., Pouw, W.",
  journal: "Annals of the New York Academy of the Sciences",
  doi: "10.1111/nyas.14806",
  status: null,
  themes: ["gesture-speech-physics", "signal-processing", "art"],
  abstract: "In many musical styles, vocalists manually gesture while they sing. Coupling between gesture kinematics and vocalization has been examined in speech contexts, but it is an open question how these couple in music making. We examine this in a corpus of South Indian, Karnatak vocal music that includes motion-capture data. Through peak magnitude analysis (linear mixed regression) and continuous time-series analyses (generalized additive modeling), we assessed whether vocal trajectories around peaks in vertical velocity, speed, or acceleration were coupling with changes in vocal acoustics (namely, F0 and amplitude). Kinematic coupling was stronger for F0 change versus amplitude, pointing to F0’s musical significance. Acceleration was the most predictive for F0 change and had the most reliable magnitude coupling, showing a one-third power relation. That acceleration, rather than other kinematics, is maximally predictive for vocalization is interesting because acceleration entails force transfers onto the body. As a theoretical contribution, we argue that gesturing in musical contexts should be understood in relation to the physical connections between gesturing and vocal production that are brought into harmony with the vocalists’ (enculturated) performance goals. Gesture–vocal coupling should, therefore, be viewed as a neuro–bodily distributed aesthetic entanglement.",
  pdfUrl: "files/PearsonPouwANNYAS2022.pdf",
  imageUrl: "images/pearsonpouw.PNG",
  openAccess: true,
  openData: "https://osf.io/ux48y/?view_only=",
  openCode: "https://osf.io/ux48y/?view_only="
},

{
  year: 2022,
  title: "Timing in conversation is dynamically adjusted turn by turn in dyadic telephone conversations",
  authors: "Pouw, W., Holler, J.",
  journal: "Cognition",
  doi: "10.1016/j.cognition.2022.105015",
  status: null,
  themes: ["social", "signal-processing", "perception"],
  abstract: "Conversational turn taking in humans involves incredibly rapid responding. The timing mechanisms underpinning such responses have been heavily debated, including questions such as who is doing the timing. Similar to findings on rhythmic tapping to a metronome, we show that floor transfer offsets (FTOs) in telephone conversations are serially dependent, such that FTOs are lag-1 negatively autocorrelated. Finding this serial dependence on a turn-by-turn basis (lag-1) rather than on the basis of two or more turns, suggests a counter-adjustment mechanism operating at the level of the dyad in FTOs during telephone conversations, rather than a more individualistic self-adjustment within speakers. This finding, if replicated, has major implications for models describing turn taking, and confirms the joint, dyadic nature of human conversational dynamics. Future research is needed to see how pervasive serial dependencies in FTOs are, such as for example in richer communicative face-to-face contexts where visual signals affect conversational timing.",
  pdfUrl: "files/PouwHoller2022.pdf",
  imageUrl: "images/pouwholler.PNG",
  openAccess: true,
  openData: "https://osf.io/6tqhp/",
  openCode: "https://osf.io/6tqhp/"
},

{
  year: 2022,
  title: "The multimodal nature of communicative efficiency in social interaction",
  authors: "Rasenberg, M., Pouw, W., Ozyurek, A., Dingemanse, M.",
  journal: "Scientific Reports",
  doi: "10.1038/s41598-022-22883-w",
  status: null,
  themes: ["social", "signal-processing"],
  abstract: "How does communicative efficiency shape language use? We approach this question by studying it at the level of the dyad, and in terms of multimodal utterances. We investigate whether and how people minimize their joint speech and gesture efforts in face-to-face interactions, using linguistic and kinematic analyses. We zoom in on other-initiated repair—a conversational microcosm where people coordinate their utterances to solve problems with perceiving or understanding. We find that efforts in the spoken and gestural modalities are wielded in parallel across repair turns of different types, and that people repair conversational problems in the most cost-efficient way possible, minimizing the joint multimodal effort for the dyad as a whole. These results are in line with the principle of least collaborative effort in speech and with the reduction of joint costs in non-linguistic joint actions. The results extend our understanding of those coefficiency principles by revealing that they pertain to multimodal utterance design.",
  pdfUrl: "files/Rasenbergetal2022.pdf",
  imageUrl: "images/Rasenberg.PNG",
  openAccess: true,
  openData: "https://data.donders.ru.nl/collections/di/dccn/DSC_3011157.02_379?0",
  openCode: "https://data.donders.ru.nl/collections/di/dccn/DSC_3011157.02_379?0"
},
{
  year: 2021,
  title: "A systematic investigation of gesture kinematics in evolving manual languages in the lab",
  authors: "Pouw, W., Dingemanse, M., Motamedi, Y., Özyürek, A.",
  journal: "Cognitive Science",
  doi: "10.1111/cogs.13014",
  status: null,
  themes: ["gesture-networks", "signal-processing", "evolution"],
  abstract: "Silent gestures consist of complex multi-articulatory movements but are now primarily studied through categorical coding of the referential gesture content. The relation of categorical linguistic content with continuous kinematics is therefore poorly understood. Here, we reanalyzed the video data from a gestural evolution experiment (Motamedi, Schouwstra, Smith, Culbertson, & Kirby, 2019), which showed increases in the systematicity of gesture content over time. We applied computer vision techniques to quantify the kinematics of the original data. Our kinematic analyses demonstrated that gestures become more efficient and less complex in their kinematics over generations of learners. We further detect the systematicity of gesture form on the level of thegesture kinematic interrelations, which directly scales with the systematicity obtained on semantic coding of the gestures. Thus, from continuous kinematics alone, we can tap into linguistic aspects that were previously only approachable through categorical coding of meaning. Finally, going beyond issues of systematicity, we show how unique gesture kinematic dialects emerged over generations as isolated chains of participants gradually diverged over iterations from other chains. We, thereby, conclude that gestures can come to embody the linguistic system at the level of interrelationships between communicative tokens, which should calibrate our theories about form and linguistic content.",
  pdfUrl: "files/Pouwetal2021CogSci.pdf",  
  imageUrl: "images/mot.png",
  openAccess: true,
  openData: "https://github.com/WimPouw/GestureNetworksEvolving",
  openCode: "https://github.com/WimPouw/GestureNetworksEvolving",
  rmarkdown: "https://github.com/WimPouw/GestureNetworksEvolving"
},

{
  year: 2021,
  title: "Multilevel rhythms in multimodal communication",
  authors: "Pouw, W., Proksch, S., Drijvers, L., Gamba, M., Holler, J., Kello, C., Scheafer, R., Wiggins, G.",
  journal: "Philosophical Transactions of the Royal Society B: Biological Sciences",
  doi: "10.1098/rstb.2020.0334",
  status: null,
  themes: ["evolution", "theory", "signal-processing"],
  abstract: "It is now widely accepted that the brunt of animal communication is conducted via several modalities, e.g. acoustic and visual, either simultaneously or sequentially. This is a laudable multimodal turn relative to traditional accounts of temporal aspects of animal communication which have focused on a single modality at a time. However, the fields that are currently contributing to the study of multimodal communication are highly varied, and still largely disconnected given their sole focus on a particular level of description or their particular concern with human or non-human animals. Here, we provide an integrative overview of converging findings that show how multimodal processes occurring at neural, bodily, as well as social interactional levels each contribute uniquely to the complex rhythms that characterize communication in human and non-human animals. Though we address findings for each of these levels independently, we conclude that the most important challenge in this field is to identify how processes at these different levels connect.",
  pdfUrl: "files/Pouwetal2021roysoc.pdf",
  imageUrl: "images/pouwmultilevel.PNG",
  openAccess: false,
  openData: null
},

{
  year: 2021,
  title: "Semantically related gestures move alike: Towards a distributional semantics of gesture kinematics",
  authors: "Pouw, W., de Wit, J., Bögels, S., Rasenberg, M., Milivojevic, B., Ozyurek, A.",
  journal: "Digital Human Modeling and Applications in Health, Safety, Ergonomics and Risk Management. HCII 2021",
  doi: "10.1007/978-3-030-77817-0_20",
  status: null,
  themes: ["gesture-networks", "signal-processing"],
  abstract: "Most manual communicative gestures that humans produce cannot be looked up in a dictionary, as these manual gestures inherit their meaning in large part from the communicative context and are not conventionalized. However, it is understudied to what extent the communicative signal as such—bodily postures in movement, or kinematics—can inform about gesture semantics. Can we construct, in principle, a distribution-based semantics of gesture kinematics, similar to how word vectorization methods in NLP (Natural language Processing) are now widely used to study semantic properties in text and speech? For such a project to get off the ground, we need to know the extent to which semantically similar gestures are more likely to be kinematically similar. In study 1 we assess whether semantic word2vec distances between the conveyed concepts participants were explicitly instructed to convey in silent gestures, relate to the kinematic distances of these gestures as obtained from Dynamic Time Warping (DTW). In a second director-matcher dyadic study we assess kinematic similarity between spontaneous co-speech gestures produced between interacting participants. Participants were asked before and after they interacted how they would name the objects. The semantic distances between the resulting names were related to the gesture kinematic distances of gestures that were made in the context of conveying those objects in the interaction. We find that the gestures’ semantic relatedness is reliably predictive of kinematic relatedness across these highly divergent studies, which suggests that the development of an NLP method of deriving semantic relatedness from kinematics is a promising avenue for future developments in automated multimodal recognition. Deeper implications for statistical learning processes in multimodal language are discussed.",
  pdfUrl: "files/Pouw_etal_2021_HCII.pdf",
  imageUrl: "images/pouwhcii.PNG",
  openAccess: false,
  openData: "https://osf.io/yu7kq/",
  openCode: "https://osf.io/yu7kq/"
},

{
  year: 2021,
  title: "When hands are used to communicate they are less susceptible to illusion than when they are used to estimate",
  authors: "Brown, A., Pouw, W., Brentari, D., Goldin-Meadow, S.",
  journal: "Psychological Science",
  doi: "10.1177/0956797621991552",
  status: null,
  themes: ["perception"],
  abstract: "When we use our hands to estimate the length of a stick in the Müller-Lyer illusion, we are highly susceptible to the illusion. But when we prepare to act on sticks under the same conditions, we are significantly less susceptible. Here, we asked whether people are susceptible to illusion when they use their hands not to act on objects but to describe them in spontaneous co-speech gestures or conventional sign languages of the deaf. Thirty-two English speakers and 13 American Sign Language signers used their hands to act on, estimate the length of, and describe sticks eliciting the Müller-Lyer illusion. For both gesture and sign, the magnitude of illusion in the description task was smaller than the magnitude of illusion in the estimation task and not different from the magnitude of illusion in the action task. The mechanisms responsible for producing gesture in speech and sign thus appear to operate not on percepts involved in estimation but on percepts derived from the way we act on objects.",
  pdfUrl: "files/BrownetalPS2021.pdf",
  imageUrl: "images/brown.PNG",
  openAccess: false,
  openData: "https://osf.io/3rb6u/",
  openCode: "https://osf.io/3rb6u/"
},

{
  year: 2021,
  title: "Gesture-speech physics in fluent speech and rhythmic upper limb movements",
  authors: "Pouw, W., de Jonge-Hoekstra, L., Harrison, S. J., Paxton, A., Dixon, J. A.",
  journal: "Annals of the New York Academy of the Sciences",
  doi: "10.1111/nyas.14532",
  status: null,
  themes: ["gesture-speech-physics", "biomechanics", "signal-processing"],
  abstract: "It is commonly understood that hand gesture and speech coordination in humans is culturally and cognitively acquired, rather than having a biological basis. Recently, however, the biomechanical physical coupling of arm movements to speech vocalization has been studied in steady-state vocalization and monosyllabic utterances, where forces produced during gesturing are transferred onto the tensioned body, leading to changes in respiratory-related activity and thereby affecting vocalization F0 and intensity. In the current experiment (n = 37), we extend this previous line of work to show that gesture–speech physics also impacts fluent speech. Compared with nonmovement, participants who are producing fluent self-formulated speech while rhythmically moving their limbs demonstrate heightened F0 and amplitude envelope, and such effects are more pronounced for higher-impulse arm versus lowerimpulse wrist movement. We replicate that acoustic peaks arise especially during moments of peak impulse (i.e., the beat) of the movement, namely around deceleration phases of the movement. Finally, higher deceleration rates of higher-mass arm movements were related to higher peaks in acoustics. These results confirm a role for physical impulses of gesture affecting the speech system. We discuss the implications of gesture–speech physics for understanding of the emergence of communicative gesture, both ontogenetically and phylogenetically.",
  pdfUrl: "files/PouwetalANNYAS2021.pdf",
  imageUrl: "images/pouwannyas.PNG",
  openAccess: true,
  openData: "https://osf.io/tgbmw/",
  openCode: "https://osf.io/tgbmw/",
  rmarkdown: "https://osf.io/tgbmw/"
},
{
  year: 2020,
  title: "Reply to Ravignani and Kotz: Physical impulses from upper-limb movements impact the respiratory-vocal system",
  authors: "Pouw, W., Paxton, A., Harrison, S. J., Dixon, J. A.",
  journal: "Proceedings of the National Academy of Sciences",
  doi: "10.1073/pnas.2015452117", 
  status: null,
  themes: ["gesture-speech-physics", "theory"],
  abstract: "The commentary by Ravignani and Kotz (1) affords us an opportunity to clarify the interpretation of our recent findings (2). We showed that “although listeners could only hear and not see the vocalizer, they were able to completely synchronize their own rhythmic wrist or arm movement with the movement of the vocalizer which they perceived in the voice acoustics” (ref. 2, p. 11364). We interpreted these results as “corroborat[ing] recent evidence suggesting that the human voice is constrained by bodily tensioning affecting the respiratory–vocal system” (ref. 2, p. 11364). Thus, we were surprised to read that Ravignani and Kotz believed that we “attribute[d] this rhythmicity [of the speaker’s voice] to voice modulation” (1). This is a misunderstanding of our position. In ref. 2 and elsewhere (3–5) we have argued that gesture affects speech through the forces it produces on the respiratory–vocal system.",
  pdfUrl: "files/PouwetalPNASresponse2020.pdf",
  imageUrl: "images/pnasreply.PNG",
  openAccess: false,
  openData: null
},

{
  year: 2020,
  title: "Energy flows in gesture-speech physics: The respiratory-vocal system and its coupling with hand gestures",
  authors: "Pouw, W., Harrison, S. J., Esteve-Gibert, N., Dixon, J.A.",
  journal: "The Journal of the Acoustical Society of America",
  doi: "10.1121/10.0001730",
  status: null, 
  themes: ["gesture-speech-physics", "biomechanics", "signal-processing"],
  abstract: "Expressive moments in communicative hand gestures often align with emphatic stress in speech. It has recently been found that acoustic markers of emphatic stress arise naturally during steady-state phonation when upper-limb movements impart physical impulses on the body, most likely affecting acoustics via respiratory activity. In this confirmatory study, participants (N ¼ 29) repeatedly uttered consonant-vowel (/pa/) mono-syllables while moving in particular phase relations with speech, or not moving the upper limbs. This study shows that respiration-related activity is affected by (especially high-impulse) gesturing when vocalizations occur near peaks in physical impulse. This study further shows that gesture-induced moments of bodily impulses increase the amplitude envelope of speech, while not similarly affecting the Fundamental Frequency (F0). Finally, tight relations between respiration-related activity and vocalization were observed, even in the absence of movement, but even more so when upper-limb movement is present. The current findings expand a developing line of research showing that speech is modulated by functional biomechanical linkages between hand gestures and the respiratory system. This identification of gesturespeech biomechanics promises to provide an alternative phylogenetic, ontogenetic, and mechanistic explanatory route of why communicative upper limb movements co-occur with speech in humans.",
  pdfUrl: "files/PouwetalJASA2020.pdf",
  imageUrl: "images/JASA.PNG",
  openAccess: false,
  openData: "https://osf.io/e3ukd/",
  openCode: "https://osf.io/e3ukd/"
},

{
  year: 2020,
  title: "Learning from gesture and action: An investigation of memory for where objects went and how they got there",
  authors: "Hostetter, A., Pouw, W., Wakefield, E.",
  journal: "Cognitive Science",
  doi: "10.1111/cogs.12889",
  status: null,
  themes: ["learning", "perception"],
  abstract: "Speakers often use gesture to demonstrate how to perform actions—for example, they might show how to open the top of a jar by making a twisting motion above the jar. Yet it is unclear whether listeners learn as much from seeing such gestures as they learn from seeing actions that physically change the position of objects (i.e., actually opening the jar). Here, we examined participants’ implicit and explicit understanding about a series of movements that demonstrated how to move a set of objects. The movements were either shown with actions that physically relocated each object or with gestures that represented the relocation without touching the objects. Further, the end location that was indicated for each object covaried with whether the object was grasped with one or two hands. We found that memory for the end location of each object was better after seeing the physical relocation of the objects, that is, after seeing action, than after seeing gesture, regardless of whether speech was absent (Experiment 1) or present (Experiment 2). However, gesture and action built similar implicit understanding of how a particular handgrasp corresponded with a particular end location. Although gestures miss the benefit of showing the end state of objects that have been acted upon, the data show that gestures are as good as action in building knowledge of how to perform an action.",
  pdfUrl: "files/Hostetteretal2020Cogsci.pdf",
  imageUrl: null,
  openAccess: false,
  openData: "https://osf.io/e3ukd/",
  openCode: "https://osf.io/e3ukd/",
  preregistration: "https://osf.io/e3ukd/"
},

{
  year: 2020,
  title: "Quasi-rhythmic features of hand gestures show unique modulations within languages: Evidence from bilingual speakers",
  authors: "Pouw, W., Jaramillo, J., Dixon, J.A., Ozyurek, A.",
  journal: "Proceedings of the 7th meeting of Gesture and Speech in Interaction - GESPIN2020",
  doi: null,
  status: null,
  themes: ["signal-processing"],
  abstract: "Hand gestures are known to beat (i.e., oscillate) with the quasi-rhythmic aspects of speech. It is unknown however whether speakers modulate their oscillatory properties of gesture in unique ways depending on which language they are speaking. Leveraging wavelet analysis and motion tracking we find that gestures produced by bilingual speakers are more similar in their quasi-rhythmic properties when produced under the same rather than a different language. This suggests that gestures’ oscillatory aspects are likely to be in part defined by the language spoken. More cross-language research is needed to understand whether oscillatory properties of gesture are indeed uniquely specific to the spoken language and how such oscillatory properties might relate to properties in speech.",
  pdfUrl: "files/PouwJaramilloGESPIN2020.pdf",
  imageUrl: "images/pouwjaramillo.PNG",
  openAccess: true,
  openData: "https://osf.io/2epwd/",
  openCode: "https://osf.io/2epwd/"
},

{
  year: 2020,
  title: "Visual and haptic perception of affordances of feelies",
  authors: "Dowell, C., Hajnal, A., Pouw, W., Wagman, J.",
  journal: "Perception",
  doi: "10.1177/0301006620946532",
  status: null,
  themes: ["perception"],
  abstract: "Most objects have well-defined affordances. Investigating perception of affordances of objects that were not created for a specific purpose would provide insight into how affordances are perceived. In addition, comparison of perception of affordances for such objects across different exploratory modalities (visual vs. haptic) would offer a strong test of the lawfulness of information about affordances (i.e., the invariance of such information over transformation). Along these lines, “feelies”— objects created by Gibson with no obvious function and unlike any common object—could shed light on the processes underlying affordance perception. This study showed that when observers reported potential uses for feelies, modality significantly influenced what kind of affordances were perceived. Specifically, visual exploration resulted in more noun labels (e.g., “toy”) than haptic exploration which resulted in more verb labels (i.e., “throw”). These results suggested that overlapping, but distinct classes of action possibilities are perceivable using vision and haptics. Semantic network analyses revealed that visual exploration resulted in objectoriented responses focused on object identification, whereas haptic exploration resulted in action-oriented responses. Cluster analyses confirmed these results. Affordance labels produced in the visual condition were more consistent, used fewer descriptors, were less diverse, but more novel than in the haptic condition.",
  pdfUrl: "files/Dowelletal2020.pdf",
  imageUrl: "images/dowell.PNG",
  openAccess: false,
  openData: "https://osf.io/93ydn/?view_only=",
  openCode: "https://osf.io/93ydn/?view_only="
},

{
  year: 2020,
  title: "Acoustic information about upper limb movement in voicing",
  authors: "Pouw, W., Paxton, A., Harrison, S. J., Dixon, J. A.",
  journal: "PNAS",
  doi: "10.1073/pnas.2004163117",
  status: null,
  themes: ["gesture-speech-physics", "biomechanics", "perception"],
  abstract: "We show that the human voice has complex acoustic qualities that are directly coupled to peripheral musculoskeletal tensioning of the body, such as subtle wrist movements. In this study, human vocalizers produced a steady-state vocalization while rhythmically moving the wrist or the arm at different tempos. Although listeners could only hear and not see the vocalizer, they were able to completely synchronize their own rhythmic wrist or arm movement with the movement of the vocalizer which they perceived in the voice acoustics. This study corroborates recent evidence suggesting that the human voice is constrained by bodily tensioning affecting the respiratory–vocal system. The current results show that the human voice contains a bodily imprint that is directly informative for the interpersonal perception of another’s dynamic physical states.",
  pdfUrl: "files/PouwPaxtonetalPNAS2020.pdf",
  imageUrl: "images/pouwpnas.PNG",
  openAccess: true,
  openData: "https://osf.io/9843h/",
  openCode: "https://osf.io/9843h/",
  preregistration: "https://osf.io/9843h/"
},

{
  year: 2020,
  title: "The quantification of gesture-speech synchrony: An overview and validation of video-based motion tracking",
  authors: "Pouw, W., Trujillo, J.P., Dixon, J.A.",
  journal: "Behavior Research Methods",
  doi: "10.3758/s13428-019-01271-9",
  status: null,
  themes: ["signal-processing", "ai-methods"],
  abstract: "There is increasing evidence that hand gestures and speech synchronize their activity on multiple dimensions and timescales. For example, gesture’s kinematic peaks (e.g., maximum speed) are coupled with prosodic markers in speech. Such coupling operates on very short timescales at the level of syllables (200 ms), and therefore requires high-resolution measurement of gesture kinematics and speech acoustics. High-resolution speech analysis is common for gesture studies, given that field’s classic ties with (psycho)linguistics. However, the field has lagged behind in the objective study of gesture kinematics (e.g., as compared to research on instrumental action). Often kinematic peaks in gesture are measured by eye, where a “moment of maximum effort” is determined by several raters. In the present article, we provide a tutorial on more efficient methods to quantify the temporal properties of gesture kinematics, in which we focus on common challenges and possible solutions that come with the complexities of studying multimodal language. We further introduce and compare, using an actual gesture dataset (392 gesture events), the performance of two video-based motion-tracking methods (deep learning vs. pixel change) against a high-performance wired motion-tracking system (Polhemus Liberty). We show that the videography methods perform well in the temporal estimation of kinematic peaks, and thus provide a cheap alternative to expensive motion-tracking systems. We hope that the present article incites gesture researchers to embark on the widespread objective study of gesture kinematics and their relation to speech.",
  pdfUrl: "files/PouwTrujilloDixon2020.pdf",
  imageUrl: "images/pouwtruj.PNG",
  openAccess: true,
  openData: "https://osf.io/rgfv3/",
  openCode: "https://osf.io/rgfv3/"
},

{
  year: 2020,
  title: "Gesture networks: Introducing dynamic time warping and network analysis for the kinematic study of gesture ensembles",
  authors: "Pouw, W., Dixon, J. A.",
  journal: "Discourse Processes",
  doi: "10.1080/0163853X.2019.1678967",
  status: null,
  themes: ["gesture-networks", "signal-processing"],
  abstract: "We introduce applications of established methods in time-series and network analysis that we jointly apply here for the kinematic study of gesture ensembles. We define a gesture ensemble as the set of gestures produced during discourse by a single person or a group of persons. Here we are interested in how gestures kinematically relate to one another. We use a bivariate time-series analysis called dynamic time warping to assess how similar each gesture is to other gestures in the ensemble in terms of their velocity profiles (as well as studying multivariate cases with gesture velocity and speech amplitude envelope profiles). By relating each gesture event to all other gesture events produced in the ensemble, we obtain a weighted matrix that essentially represents a network of similarity relationships. We can therefore apply network analysis that can gauge, for example, how diverse or coherent certain gestures are with respect to the gesture ensemble. We believe these analyses promise to be of great value for gesture studies, as we can come to understand how low-level gesture features (kinematics of gesture) relate to the higher-order organizational structures present at the level of discourse.",
  pdfUrl: "files/Pouw_Dixon_2020_Gesture networks.pdf",
  imageUrl: "images/gesturenetworks.PNG",
  openAccess: false,
  openData: "https://osf.io/u46qd/",
  openCode: "https://osf.io/rgfv3/"
},
{
  year: 2019,
  title: "Gesture-speech physics: The biomechanical basis for the emergence of gesture-speech synchrony",
  authors: "Pouw, W., Harrison, S. J., Dixon, J. A.",
  journal: "Journal of Experimental Psychology: General",
  doi: "10.1037/xge0000646",
  status: null,
  themes: ["gesture-speech-physics", "biomechanics", "signal-processing"],
  abstract: "The phenomenon of gesture–speech synchrony involves tight coupling of prosodic contrasts in gesture movement (e.g., peak velocity) and speech (e.g., peaks in fundamental frequency; F0). Gesture–speech synchrony has been understood as completely governed by sophisticated neural-cognitive mechanisms. However, gesture–speech synchrony may have its original basis in the resonating forces that travel through the body. In the current preregistered study, movements with high physical impact affected phonation in line with gesture–speech synchrony as observed in natural contexts. Rhythmic beating of the arms entrained phonation acoustics (F0 and the amplitude envelope). Such effects were absent for a condition with low-impetus movements (wrist movements) and a condition without movement. Further, movement–phonation synchrony was more pronounced when participants were standing as opposed to sitting, indicating a mediating role for postural stability. We conclude that gesture–speech synchrony has a biomechanical basis, which will have implications for our cognitive, ontogenetic, and phylogenetic understanding of multimodal language.",
  pdfUrl: "files/PouwHarrisonDixonJEPG2019.pdf",
  imageUrl: "images/pouwjepg2019.PNG",
  openAccess: false,
  openData: "https://osf.io/5aydk/",
  openCode: "https://osf.io/5aydk/",
  preregistration: "https://osf.io/5aydk/"
},

{
  year: 2019,
  title: "Entrainment and modulation of gesture-speech synchrony under delayed auditory feedback",
  authors: "Pouw, W., Dixon, J. A.",
  journal: "Cognitive Science",
  doi: "10.1111/cogs.12721",
  status: null,
  themes: ["biomechanics", "signal-processing"],
  abstract: "Gesture–speech synchrony re-stabilizes when hand movement or speech is disrupted by a delayed feedback manipulation, suggesting strong bidirectional coupling between gesture and speech. Yet it has also been argued from case studies in perceptual–motor pathology that hand gestures are a special kind of action that does not require closed-loop re-afferent feedback to maintain synchrony with speech. In the current pre-registered within-subject study, we used motion tracking to conceptually replicate McNeill’s (1992) classic study on gesture–speech synchrony under normal and 150 ms delayed auditory feedback of speech conditions (NO DAF vs. DAF). Consistent with, and extending McNeill’s original results, we obtain evidence that (a) gesture-speech synchrony is more stable under DAF versus NO DAF (i.e., increased coupling effect), (b) that gesture and speech variably entrain to the external auditory delay as indicated by a consistent shift in gesture-speech synchrony offsets (i.e., entrainment effect), and (c) that the coupling effect and the entrainment effect are codependent. We suggest, therefore, that gesture–speech synchrony provides a way for the cognitive system to stabilize rhythmic activity under interfering conditions.",
  pdfUrl: "files/PouwDixonCogsci2019.pdf",
  imageUrl: "images/pouwdixcogsci.PNG",
  openAccess: true,
  openData: "https://osf.io/pcde3/",
  openCode: "https://osf.io/pcde3/",
  preregistration: "https://osf.io/pcde3/"
},

{
  year: 2019,
  title: "The cognitive basis for the split-attention effect",
  authors: "Pouw, W., Rop, G., de Koning, B., Paas, F",
  journal: "Journal of Experimental Psychology: General",
  doi: "10.1037/xge0000578",
  status: null,
  themes: ["learning", "perception"],
  abstract: "The split-attention effect entails that learning from spatially separated, but mutually referring information sources (e.g., text and picture), is less effective than learning from the equivalent spatially integrated sources. According to cognitive load theory, impaired learning is caused by the working memory load imposed by the need to distribute attention between the information sources and mentally integrate them. In this study, we directly tested whether the split-attention effect is caused by spatial separation per se. Spatial distance was varied in basic cognitive tasks involving pictures (Experiment 1) and text–picture combinations (Experiment 2; preregistered study), and in more ecologically valid learning materials (Experiment 3). Experiment 1 showed that having to integrate two pictorial stimuli at greater distances diminished performance on a secondary visual working memory task, but did not lead to slower integration. When participants had to integrate a picture and written text in Experiment 2, a greater distance led to slower integration of the stimuli, but not to diminished performance on the secondary task. Experiment 3 showed that presenting spatially separated (compared with integrated) textual and pictorial information yielded fewer integrative eye movements, but this was not further exacerbated when increasing spatial distance even further. This effect on learning processes did not lead to differences in learning outcomes between conditions. In conclusion, we provide evidence that larger distances between spatially separated information sources influence learning processes, but that spatial separation on its own is not likely to be the only, nor a sufficient, condition for impacting learning outcomes.",
  pdfUrl: "files/PouwROPJEPG2019.pdf",
  imageUrl: "images/pouwrop.PNG",
  openAccess: false,
  openData: "https://osf.io/ruqfk/",
  openCode: "https://osf.io/ruqfk/",
  preregistration: "https://osf.io/ruqfk/"
},

{
  year: 2019,
  title: "Acoustic specification of upper limb movement in voicing",
  authors: "Pouw, W., Paxton, A., Harrison, S.J., Dixon, J. A.",
  journal: "Proceedings of the 6th meeting of Gesture and Speech in Interaction - GESPIN 6",
  doi: "10.17619/UNIPB/1-812",
  status: null,
  themes: ["gesture-speech-physics", "signal-processing", "perception"],
  abstract: "Hand gestures communicate through the visual information created by movement. Recently, we found that there are also direct biomechanical effects of high-impetus upper limb movement on voice acoustics. Here we explored whether listeners could detect information about movement in the voicing of another person. In this exploratory study, participants listened to a recorded vocalizer who was simultaneously producing low-(wrist movement) or high-(arm movement) impetus movements at three different tempos. Listeners were asked to synchronize their own movement (wrist or arm movement) with the vocalizer. Listeners coupled with the frequency of the vocalizer arm (but not wrist) movements, and showed phase-coupling with vocalizer arm (but not wrist) movements. However, we found that this synchronization occurred regardless of whether the listener was moving their wrist or arm. This study shows that, in principle, there is acoustic specification of arm movements in voicing, but not wrist movements. These results, if replicated, provide novel insight into the possible interpersonal functions of gesture acoustics, which may lie in communicating bodily states.",
  pdfUrl: "files/PouwPaxtonGESPIN2019.pdf",
  imageUrl: "images/pouwpaxtongespin.PNG",
  openAccess: true,
  openData: "https://osf.io/9843h",
  openCode: "https://osf.io/9843h"
},

{
  year: 2019,
  title: "Quantifying gesture-speech synchrony",
  authors: "Pouw, W., Dixon, J. A.",
  journal: "Proceedings of the 6th meeting of Gesture and Speech in Interaction - GESPIN 6",
  doi: "10.17619/UNIPB/1-815",
  status: null,
  themes: ["signal-processing"],
  abstract: "Spontaneously occurring speech is often seamlessly accompanied by hand gestures. Detailed observations of video data suggest that speech and gesture are tightly synchronized in time, consistent with a dynamic interplay between body and mind. However, spontaneous gesture-speech synchrony has rarely been objectively quantified beyond analyses of video data, which do not allow for identification of kinematic properties of gestures. Consequently, the point in gesture which is held to couple with speech, the so-called moment of “maximum effort”, has been variably equated with the peak velocity, peak acceleration, peak deceleration, or the onset of the gesture. In the current exploratory report, we provide novel evidence from motion-tracking and acoustic data that peak velocity is closely aligned, and shortly leads, the peak pitch (F0) of speech.",
  pdfUrl: "files/PouwGESPIN2019.pdf",
  imageUrl: "images/quantifyingpouw.PNG",
  openAccess: true,
  openData: "https://osf.io/5ja6y/",
  openCode: "https://osf.io/5ja6y/",
  corrigendum: "https://osf.io/kw2x4"
},

{
  year: 2019,
  title: "Reinterpretation in Visual Imagery Is Possible without Visual Cues: A Validation of Previous Research",
  authors: "Kamermans, K., Pouw, W. T. J. L., Mast, F. W., Paas, F",
  journal: "Psychological Research",
  doi: "10.1007/s00426-017-0956-5",
  status: null,
  themes: ["perception"],
  abstract: "Is visual reinterpretation of bistable figures (e.g., duck/rabbit figure) in visual imagery possible? Current consensus suggests that it is in principle possible because of converging evidence of quasi-pictorial functioning of visual imagery. Yet, studies that have directly tested and found evidence for reinterpretation in visual imagery, allow for the possibility that reinterpretation was already achieved during memorization of the figure(s). One study resolved this issue, providing evidence for reinterpretation in visual imagery (Mast and Kosslyn, Cognition 86:57–70, 2002). However, participants in that study performed reinterpretations with aid of visual cues. Hence, reinterpretation was not performed with mental imagery alone. Therefore, in this study we assessed the possibility of reinterpretation without visual support. We further explored the possible role of haptic cues to assess the multimodal nature of mental imagery. Fifty-three participants were consecutively presented three to be remembered bistable 2-D figures (reinterpretable when rotated 180°), two of which were visually inspected and one was explored hapticly. After memorization of the figures, a visually bistable exemplar figure was presented to ensure understanding of the concept of visual bistability. During recall, 11 participants (out of 36; 30.6%) who did not spot bistability during memorization successfully performed reinterpretations when instructed to mentally rotate their visual image, but additional haptic cues during mental imagery did not inflate reinterpretation ability. This study validates previous findings that reinterpretation in visual imagery is possible.",
  pdfUrl: "files/Kamermansetal2019.pdf",
  imageUrl: "images/KamermansRein.PNG",
  openAccess: false,
  openData: "https://osf.io/rysfm/"
},
{
  year: 2018,
  title: "Does gesture strengthen sensorimotor knowledge of objects? The case of the size-weight illusion",
  authors: "Pouw, W., Wassenburg, S., de Koning, B., Hostetter, A., Paas, F",
  journal: "Psychological Research",
  doi: "10.1007/s00426-018-1128-y",
  status: null,
  themes: ["perception", "learning"],
  abstract: "Co-speech gestures have been proposed to strengthen sensorimotor knowledge related to objects’ weight and manipulability. This pre-registered study (https://www.osf.io/9uh6q/) was designed to explore how gestures affect memory for sensorimotor information through the application of the visual-haptic size-weight illusion (i.e., objects weigh the same, but are experienced as different in weight). With this paradigm, a discrepancy can be induced between participants’ conscious illusory perception of objects’ weight and their implicit sensorimotor knowledge (i.e., veridical motor coordination). Depending on whether gestures reflect and strengthen either of these types of knowledge, gestures may respectively decrease or increase the magnitude of the size-weight illusion. Participants (N = 159) practiced a problem-solving task with small and large objects that were designed to induce a size-weight illusion, and then explained the task with or without co-speech gesture or completed a control task. Afterwards, participants judged the heaviness of objects from memory and then while holding them. Confirmatory analyses revealed an inverted size-weight illusion based on heaviness judgments from memory and we found gesturing did not affect judgments. However, exploratory analyses showed reliable correlations between participants’ heaviness judgments from memory and (a) the number of gestures produced that simulated actions, and (b) the kinematics of the lifting phases of those gestures. These findings suggest that gestures emerge as sensorimotor imaginings that are governed by the agent’s conscious renderings about the actions they describe, rather than implicit motor routines.",
  pdfUrl: "files/PouwWassenburgetal2018.pdf",
  imageUrl: null,
  openAccess: false,
  openData: "https://osf.io/9uh6q/",
  openCode: "https://osf.io/9uh6q/",
  preregistration: "https://osf.io/9uh6q/"
},

{
  year: 2018,
  title: "Co-thought Gesturing Supports More Complex Problem Solving in Subjects with Lower Visual Working-memory Capacity",
  authors: "Eielts, C., Pouw, W., Ouwehand, K., Van Gog, T., Zwaan, R. A., Paas, F",
  journal: "Psychological Research",
  doi: "10.1007/s00426-018-1065-9",
  status: null,
  themes: ["perception", "learning"],
  abstract: "During silent problem solving, hand gestures arise that have no communicative intent. The role of such co-thought gestures in cognition has been understudied in cognitive research as compared to co-speech gestures. We investigated whether gesticulation during silent problem solving supported subsequent performance in a Tower of Hanoi problem-solving task, in relation to visual working-memory capacity and task complexity. Seventy-six participants were assigned to either an instructed gesture condition or a condition that allowed them to gesture, but without explicit instructions to do so. This resulted in three gesture groups: (1) non-gesturing; (2) spontaneous gesturing; (3) instructed gesturing. In line with the embedded/extended cognition perspective on gesture, gesturing benefited complex problem-solving performance for participants with a lower visual working-memory capacity, but not for participants with a lower spatial working-memory capacity.",
  pdfUrl: "files/Eieltsetal2020.pdf",
  imageUrl: null,
  openAccess: false,
  openData: "https://osf.io/fydsv/",
},

{
  year: 2018,
  title: "The role of co-thought gestures, visual working memory, and task complexity in problem-solving: A replication study with children (8-12 yrs)",
  authors: "Pouw, W. T. J. L., Gog, T., Zwaan, R. A., Agostinho, S., Paas, F",
  journal: "Applied Cognitive Psychology",
  doi: "10.1002/acp.3380",
  status: null,
  themes: ["learning", "perception"],
  abstract: "Co‐thought gestures are understudied as compared to co‐speech gestures yet, may provide insight into cognitive functions of gestures that are independent of speech processes. A recent study with adults showed that co‐thought gesticulation occurred spontaneously during mental preparation of problem solving. Moreover, co‐thought gesturing (either spontaneous or instructed) during mental preparation was effective for subsequent solving of the Tower of Hanoi under conditions of high cognitive load (i.e., when visual working memory capacity was limited and when the task was more difficult). In this preregistered study (https://osf.io/dreks/), we investigated whether co‐thought gestures would also spontaneously occur and would aid problem‐solving processes in children (N = 74; 8–12 years old) under high load conditions. Although children also spontaneously used co‐thought gestures during mental problem solving, this did not aid their subsequent performance when physically solving the problem. If these null results are on track, co‐thought gesture effects may be different in adults and children.",
  pdfUrl: "files/PouwetalAPC2018.pdf",
  imageUrl: null,
  openAccess: false,
  openData: "https://osf.io/dreks/",
  preregistration: "https://osf.io/dreks/"
},
{
  year: 2017,
  title: "Is ambiguity detection in haptic imagery possible? Evidence for enactive imaginings",
  authors: "Pouw, W., Aslanidou, A., Kamermans, K., Paas, F",
  journal: "Proceedings of the 39th Annual Conference of the Cognitive Science Society",
  doi: null,
  status: null,
  themes: ["perception"],
  abstract: "A classic discussion about visual imagery is whether it affords reinterpretation, like discovering two interpretations in the duck/rabbit illustration. Recent findings converge on reinterpretation being possible in visual imagery, suggesting functional equivalence with pictorial representations. However, it is unclear whether such reinterpretations are necessarily a visual-pictorial achievement. To assess this, 68 participants were briefly presented 2-d ambiguous figures. One figure was presented visually, the other via manual touch alone. Afterwards participants mentally rotated the memorized figures as to discover a novel interpretation. A portion (20.6%) of the participants detected a novel interpretation in visual imagery, replicating previous research. Strikingly, 23.6% of participants were able to reinterpret figures they had only felt. That reinterpretation truly involved haptic processes was further supported, as some participants performed co-thought gestures on an imagined figure during retrieval. These results are promising for further development of an Enactivist approach to imagination.",
  pdfUrl: "files/PouwetalCogsciProc2017.pdf",
  imageUrl: null,
  openAccess: false,
  openData: "https://osf.io/725te/"
},

{
  year: 2017,
  title: "Are gesture and speech mismatches produced by an integrated gesture-speech system? A more dynamically embodied perspective is needed for understanding gesture-related learning",
  authors: "Pouw, W. T. J. L., Van Gog, T., Zwaan, R. A., Paas, F",
  journal: "Behavioral and Brain Sciences",
  doi: "10.1017/S0140525X15003039",
  status: null,
  themes: ["theory"],
  abstract: "We observe a tension in the target article as it stresses an integrated gesture-speech system that can nevertheless consist of contradictory representational states, which are reflected by mismatches in gesture and speech/sign. Beyond problems of coherence, this prevents furthering our understanding of gesture-related learning. As a possible antidote, we invite a more dynamically embodied perspective to the stage.",
  pdfUrl: "files/PouwetalBBS2017.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},
{
  year: 2016,
  title: "Observation of depictive- versus tracing gestures selectively aids verbal versus visual-spatial learning in primary school children",
  authors: "Van Wermeskerken, M., Fijan, N., Eielts, E. C., Pouw, W. T. J. L.",
  journal: "Applied Cognitive Psychology",
  doi: "10.1002/acp.3256",
  status: null,
  themes: ["learning"],
  abstract: "Previous research has established that gesture observation aids learning in children. The current study examined whether observation of gestures (i.e. depictive and tracing gestures) differentially affected verbal and visual–spatial retention when learning a route and its street names. Specifically, we explored whether children (n = 97) with lower visual and verbal workingmemory capacity benefited more from observing gestures as compared with children who score higher on these traits. To this end, 11- to 13-year-old children were presented with an instructional video of a route containing no gestures, depictive gestures, tracing gestures or both depictive and tracing gestures. Results indicated that the type of observed gesture affected performance: Observing tracing gestures or both tracing and depictive gestures increased performance on route retention, while observing depictive gestures or both depictive and tracing gestures increased performance on street name retention. These effects were not differentially affected by working-memory capacity.",
  pdfUrl: "files/Wermeskerkenetal2016.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},

{
  year: 2016,
  title: "Augmenting Instructional Animations with Sensori-motor Information to Help Children Learn about Physical Systems",
  authors: "Pouw, W. T. J. L., van Gog, T., Zwaan, R. A., Paas, F.",
  journal: "Frontiers in Psychology",
  doi: "10.3389/fpsyg.2016.00860",
  status: null,
  themes: ["learning"],
  abstract: "We investigated whether augmenting instructional animations with a body analogy (BA) would improve 10- to 13-year-old children’s learning about class-1 levers. Children with a lower level of general math skill who learned with an instructional animation that provided a BA of the physical system, showed higher accuracy on a lever problemsolving reaction time task than children studying the instructional animation without this BA. Additionally, learning with a BA led to a higher speed–accuracy trade-off during the transfer task for children with a lower math skill, which provided additional evidence that especially this group is likely to be affected by learning with a BA. However, overall accuracy and solving speed on the transfer task was not affected by learning with or without this BA. These results suggest that providing children with a BA during animation study provides a stepping-stone for understanding mechanical principles of a physical system, which may prove useful for instructional designers. Yet, because the BA does not seem effective for all children, nor for all tasks, the degree of effectiveness of body analogies should be studied further. Future research, we conclude, should be more sensitive to the necessary degree of analogous mapping between the body and physical systems, and whether this mapping is effective for reasoning about more complex instantiations of such physical systems.",
  pdfUrl: "files/Pouwetalfrontiers2016.pdf",
  imageUrl: null,
  openAccess: true,
  openData: "https://osf.io/4pkjx/"
},

{
  year: 2016,
  title: "Gesture as predictive action",
  authors: "Pouw, W. T. J. L., Hostetter, A.",
  journal: "Reti, Saperi, Linguaggi: Italian Journal of Cognitive Sciences",
  doi: "10.12832/83918",
  status: null,
  themes: ["theory"],
  abstract: "Two broad approaches have dominated the literature on the production of speechaccompanying gestures. On the one hand, there are approaches that aim to explain the origin of gestures by specifying the mental processes that give rise to them. On the other, there are approaches that aim to explain the cognitive function that gestures have for the gesturer or the listener. In the present paper we aim to reconcile both approaches in one single perspective that is informed by a recent sea change in cognitive science, namely, Predictive Processing Perspectives (PPP; Clark, 2013b, 2015). We start with the idea put forth by the Gesture as Simulated Action (GSA) framework (Hostetter & Alibali, 2008). Under this view, the mental processes that give rise to gesture are re-enactments of sensori-motor experiences (i.e., simulated actions). We show that such anticipatory sensori-motor states and the constraints put forth by the GSA framework can be understood as top-down kinesthetic predictions that function in a broader predictive machinery as proposed by PPP. By establishing this alignment, we aim to show how gestures come to fulfill a genuine cognitive function above and beyond the mental processes that give rise to gesture.",
  pdfUrl: "files/PouwHostetterReti2016.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},

{
  year: 2016,
  title: "Does (non-)meaningful sensori-motor engagement promote learning with animated physical Systems?",
  authors: "Pouw, W. T. J. L., Eielts, E. C., van Gog, T., Zwaan, R. A., Paas, F.",
  journal: "Mind, Brain & Education",
  doi: "10.1111/mbe.12105",
  status: null,
  themes: ["learning"],
  abstract: "Previous research indicates that sensori-motor experience with physical systems can have a positive effect on learning. However, it is not clear whether this effect is caused by mere bodily engagement or the intrinsically meaningful information that such interaction affords in performing the learning task. We investigated (N = 74), through the use of a Wii Balance Board, whether different forms of physical engagement that was either meaningfully, non-meaningfully, or minimally related to the learning content would be beneficial (or detrimental) to learning about the workings of seesaws from instructional animations. The results were inconclusive, indicating that motoric competency on lever problem solving did not significantly differ between conditions, nor were response speed and transfer performance affected. These findings suggest that adult’s implicit and explicit knowledge about physical systems is stable and not easily affected by (contradictory) sensori-motor experiences. Implications for embodied learning are discussed.",
  pdfUrl: "files/Pouwetal2016MBE.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},

{
  year: 2016,
  title: "Gesturing during mental problem solving reduces eye movements, especially for individuals with lower visual working memory capacity",
  authors: "Pouw, W. T. J. L., Mavilidi, M., Van Gog, T., Paas, F.",
  journal: "Cognitive Processing",
  doi: "10.1007/s10339-016-0757-6",
  status: null,
  themes: ["perception", "learning"],
  abstract: "Non-communicative hand gestures have been found to benefit problem-solving performance. These gestures seem to compensate for limited internal cognitive capacities, such as visual working memory capacity. Yet, it is not clear how gestures might perform this cognitive function. One hypothesis is that gesturing is a means to spatially index mental simulations, thereby reducing the need for visually projecting the mental simulation onto the visual presentation of the task. If that hypothesis is correct, less eye movements should be made when participants gesture during problem solving than when they do not gesture. We therefore used mobile eye tracking to investigate the effect of co-thought gesturing and visual working memory capacity on eye movements during mental solving of the Tower of Hanoi problem. Results revealed that gesturing indeed reduced the number of eye movements (lower saccade counts), especially for participants with a relatively lower visual working memory capacity. Subsequent problem-solving performance was not affected by having (not) gestured during the mental solving phase. The current findings suggest that our understanding of gestures in problem solving could be improved by taking into account eye movements during gesturing.",
  pdfUrl: "files/PouwetalCogProc2016.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},
{
  year: 2015,
  title: "Rethinking situated and embodied social psychology",
  authors: "Pouw, W. T. J. L., de Jong, H",
  journal: "Theory and Psychology",
  doi: "10.1177/0959354315585661",
  status: null,
  themes: ["theory"],
  abstract: "This article aims to explore the scope of a Situated and Embodied Social Psychology (ESP). At first sight, social cognition seems embodied cognition par excellence. Social cognition is first and foremost a supra-individual, interactive, and dynamic process (Semin & Smith, 2013). Radical approaches in Situated/Embodied Cognitive Science (Enactivism) claim that social cognition consists in an emergent pattern of interaction between a continuously coupled organism and the (social) environment; it rejects representationalist accounts of cognition (Hutto & Myin, 2013). However, mainstream ESP (Barsalou, 1999, 2008) still takes a rather representation-friendly approach that construes embodiment in terms of specific bodily formatted representations used (activated) in social cognition. We argue that mainstream ESP suffers from vestiges of theoretical solipsism, which may be resolved by going beyond internalistic spirit that haunts mainstream ESP today.",
  pdfUrl: "files/PouwLoorendeJong2015.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},

{
  year: 2014,
  title: "Toward a more embedded/extended perspective on the cognitive function of gestures",
  authors: "Pouw, W. T. J. L., De Nooijer, J. A., Van Gog, T., Zwaan, R. A., Paas, F.",
  journal: "Frontiers in Psychology",
  doi: "10.3389/fpsyg.2014.00359",
  status: null,
  themes: ["theory"],
  abstract: "Gestures are often considered to be demonstrative of the embodied nature of the mind (Hostetter and Alibali, 2008). In this article, we review current theories and research targeted at the intra-cognitive role of gestures. We ask the question how can gestures support internal cognitive processes of the gesturer? We suggest that extant theories are in a sense disembodied, because they focus solely on embodiment in terms of the sensorimotor neural precursors of gestures. As a result, current theories on the intra-cognitive role of gestures are lacking in explanatory scope to address how gestures-asbodily-acts fulfill a cognitive function. On the basis of recent theoretical appeals that focus on the possibly embedded/extended cognitive role of gestures (Clark, 2013), we suggest that gestures are external physical tools of the cognitive system that replace and support otherwise solely internal cognitive processes.That is gestures provide the cognitive system with a stable external physical and visual presence that can provide means to think with. We show that there is a considerable amount of overlap between the way the human cognitive system has been found to use its environment, and how gestures are used during cognitive processes. Lastly, we provide several suggestions of how to investigate the embedded/extended perspective of the cognitive function of gestures.",
  pdfUrl: "files/PouwetalFrontiers2014.pdf",
  imageUrl: null,
  openAccess: true,
  openData: null
},

{
  year: 2014,
  title: "An embedded and embodied cognition review of instructional manipulatives",
  authors: "Pouw, W. T. J. L., Van Gog, T., Paas, F.",
  journal: "Educational Psychology Review",
  doi: "10.1007/s10648-014-9255-5",
  status: null,
  themes: ["learning", "theory"],
  abstract: "Recent literature on learning with instructional manipulatives seems to call for a moderate view on the effects of perceptual and interactive richness of instructional manipulatives on learning. This “moderate view” holds that manipulatives’ perceptual and interactive richness may compromise learning in two ways: (1) by imposing a very high cognitive load on the learner, and (2) by hindering drawing of symbolic inferences that are supposed to play a key role in transfer (i.e., application of knowledge to new situations in the absence of instructional manipulatives). This paper presents a contrasting view. Drawing on recent insights from Embedded Embodied perspectives on cognition, it is argued that (1) perceptual and interactive richness may provide opportunities for alleviating cognitive load (Embedded Cognition), and (2) transfer of learning is not reliant on decontextualized knowledge but may draw on previous sensorimotor experiences of the kind afforded by perceptual and interactive richness of manipulatives (Embodied Cognition). By negotiating the Embedded Embodied Cognition view with the moderate view, implications for research are derived.",
  pdfUrl: "files/Pouwetal2014EdRev.pdf",
  imageUrl: null,
  openAccess: false,
  openData: null
},

{
  year: 2012,
  title: "Cold-blooded loneliness: Social exclusion leads to lower finger temperatures",
  authors: "IJzerman, H., Gallucci, M., Pouw, W. J. T. L., Weiβgerber, S. C., Van Doesum, N. J., Williams, K. D.",
  journal: "Acta Psychologica",
  doi: "10.1016/j.actpsy.2012.05.002",
  status: null,
  themes: ["perception"],
  abstract: "Being ostracized or excluded, even briefly and by strangers, is painful and threatens fundamental needs. Recent work by Zhong and Leonardelli (2008) found that excluded individuals perceive the room as cooler and that they desire warmer drinks. A perspective that many rely on in embodiment is the theoretical idea that people use metaphorical associations to understand social exclusion (see Landau, Meier, & Keefer, 2010). We suggest that people feel colder because they are colder. The results strongly support the idea that more complex metaphorical understandings of social relations are scaffolded onto literal changes in bodily temperature: Being excluded in an online ball tossing game leads to lower finger temperatures (Study 1), while the negative affect typically experienced after such social exclusion is alleviated after holding a cup of warm tea (Study 2). The authors discuss further implications for the interaction between body and social relations specifically, and for basic and cognitive systems in general.",
  pdfUrl: "files/Ijzermanetal2012ActaPsych.pdf",
  imageUrl: null,
  openAccess: false,
  openData: "https://www.dataverse.nl/dvn/dv/tsb/faces/study/StudyPage.xhtml;jsessionid=b9f492163ee69917904a7831a38b?globalId=hdl:10411/10190&studyListingIndex=0_b9f492163ee69917904a7831a38b"
}
      ];

  const filteredPublications = React.useMemo(() => {
    return publications.filter(pub => {
      const searchMatch = (pub.title + pub.authors + pub.themes.join(' ') + (pub.abstract || '') + pub.year)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const themeMatch = selectedThemes.size === 0 || 
        pub.themes.some(theme => selectedThemes.has(theme));
      return searchMatch && themeMatch;
    }).sort((a, b) => b.year - a.year);
  }, [publications, searchTerm, selectedThemes]);

  const downloadAllPDFs = () => {
    filteredPublications
      .filter(pub => pub.pdfUrl)
      .forEach(pub => {
        const link = document.createElement('a');
        link.href = pub.pdfUrl;
        link.download = pub.pdfUrl.split('/').pop();
        link.click();
      });
  };

  const PublicationCard = ({ pub, index }) => {
    const isExpanded = expandedCard === index;
    
    return (
      <div 
        className="publication-card"
        onClick={() => setExpandedCard(isExpanded ? null : index)}
      >
        <div className="publication-header">
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="publication-title">{pub.title}</h3>
              <span className="publication-year">{pub.year}</span>
            </div>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-journal">
              {pub.journal} {pub.status && `• ${pub.status}`}
              <div className="publication-links">
              {pub.openData && (
                <a
                  href={pub.openData}
                  className="publication-link data"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-database"></i>
                  Open Data
                </a>
              )}
              {pub.openCode && (
                <a
                  href={pub.openCode}
                  className="publication-link open-code"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-code-branch"></i>
                  Open Code
                </a>
              )}
              {pub.preregistration && (
                <a
                  href={pub.preregistration}
                  className="publication-link preregistration"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-check-square"></i>
                  Preregistration
                </a>
              )}
              {pub.dashboard && (
                <a
                  href={pub.dashboard}
                  className="publication-link dashboard"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-tachometer-alt"></i>
                  Dashboard
                </a>
              )}
              {pub.rmarkdown && (
                <a
                  href={pub.rmarkdown}
                  className="publication-link code"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-code"></i>
                  RMarkdown
                </a>
              )}
              {pub.jupyterNotebook && (
                <a
                  href={pub.jupyterNotebook}
                  className="publication-link jupyter-notebook"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-book"></i>
                  Jupyter Notebook
                </a>
              )}
                {pub.corrigendum && (
                <a
                  href={pub.corrigendum}
                  className="publication-link corrigendum"
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-exclamation-circle"></i>
                  Corrigendum
                </a>
              )}
              
            </div>
              <div className="publication-themes">
                {pub.themes.map(theme => (
                  <button
                    key={theme}
                    onClick={(e) => {
                      e.stopPropagation();
                      const newThemes = new Set(selectedThemes);
                      if (newThemes.has(theme)) {
                        newThemes.delete(theme);
                      } else {
                        newThemes.add(theme);
                      }
                      setSelectedThemes(newThemes);
                    }}
                    className="theme-tag publication-button"
                  >
                    {themes[theme]}
                  </button>
                ))}
              </div>
            </p>
            
            {(isExpanded || !pub.abstract) && (
              <div className="publication-details">
                {pub.abstract && (
                  <p className="publication-abstract">
                    {pub.abstract}
                  </p>
                )}
                {pub.imageUrl && (
                  <div className="publication-image">
                    <img 
                      src={pub.imageUrl} 
                      alt={`Figure for ${pub.title}`}
                      className="w-full h-auto object-contain mt-4"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="publication-actions">
            {pub.pdfUrl && (
              <a
                href={pub.pdfUrl}
                className="publication-link pdf"
                onClick={e => e.stopPropagation()}
              >
                <i className="fa fa-download"></i>
                PDF
              </a>
            )}
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                className="publication-link doi"
                onClick={e => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-external-link"></i>
                DOI
              </a>
            )}
            <i className={`fa fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="publications-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search publications..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="fa fa-search"></i>
      </div>
      
      <div className="theme-filters">
        {Object.entries(themes).map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              const newThemes = new Set(selectedThemes);
              if (newThemes.has(key)) {
                newThemes.delete(key);
              } else {
                newThemes.add(key);
              }
              setSelectedThemes(newThemes);
            }}
            className={`theme-button ${selectedThemes.has(key) ? 'selected' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {filteredPublications.some(pub => pub.pdfUrl) && (
        <button
          onClick={downloadAllPDFs}
          className="download-button"
        >
          <i className="fa fa-download"></i>
          Download PDFs ({filteredPublications.filter(pub => pub.pdfUrl).length})
        </button>
      )}

      <div className="publication-list">
        {filteredPublications.map((pub, index) => (
          <PublicationCard pub={pub} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('publications-root');
  if (container) {
    ReactDOM.render(React.createElement(PublicationsList), container);
  }
});

const root = ReactDOM.createRoot(document.getElementById('publications-root'));
root.render(React.createElement(PublicationsList));