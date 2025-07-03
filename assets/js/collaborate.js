// collaborate.js - Enhanced with markdown support for descriptions
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, initializing collaborate components");
  
  // Load marked.js for markdown parsing
  if (!window.marked) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/9.1.6/marked.min.js';
    script.onload = initializeAfterMarked;
    document.head.appendChild(script);
  } else {
    initializeAfterMarked();
  }
  
  function initializeAfterMarked() {
    // Configure marked for better security and formatting
    if (window.marked) {
      marked.setOptions({
        breaks: true, // Convert line breaks to <br>
        gfm: true,    // GitHub Flavored Markdown
        sanitize: false, // We trust our own content
        smartLists: true,
        smartypants: true
      });
    }
    
    // Helper function to parse markdown
    function parseMarkdown(text) {
      if (!text || !window.marked) return text;
      return marked.parse(text);
    }
    
    // CENTRALIZED CARD DATA - Now supports markdown in descriptions!
    const cardData = {
      // ############################## Projects ##############################
      projects: [
        {
          image: "images/gesture-speech-physics.png",
          title: "Gesture-Speech Physics",
          description: `This project focuses on how the coupling of gesture and speech is **radically embodied**, arising out of the biomechanical connections between gestural actions, affecting lung pressures, thereby affecting the voice. 

We have discovered that arm movements directly affect the voice, by activating muscles that move the arm, or muscles that stabilize the body during arm movement, which are muscles inserting onto the rib cage, thereby affecting its movements. 

The upshot is that the cascading biomechanical effects of upper limb movements naturally perturb the voice. This raises fundamental questions about control. How does the animal functionally and thereby intelligently align biomechanical (in)stabilities into their communicative repertoire.

**Key open questions** for gesture-speech physics that need to be pursued for a full understanding are:

1. How is biomechanics functionally aligned in humans and other animals?
2. What are the boundary conditions where biomechanical effects are too weak to affect the voice?
3. Can we precisely predict voice changes from joint torques or predicted muscle activity?
4. Can gesture-speech physics be replicated in large-scale natural corpora without biomechanical measurements?
5. Can we emulate gesture-speech physics in robots to increase human-likeness?
6. Can we simulate and evolve physics-based agents through evolutionary algorithms to understand if biomechanical couplings are beneficial to be used for communication?
7. Gesture-speech physics as a theory is at a stage that it should be formalizable in terms of Directed Acyclic Graphs and tentative (ordinary) differential equation forms that require further testing. This would improve the theoretical rigor of the theory and allow for more precise predictions.

*There are many other questions.*

#### 📰 Recent publication on gesture-speech physics:
- Pouw, W., Burchardt, L., Werner, R., Selen, L. P. J. (2025). The human voice aligns with whole-body kinetics. *Proceedings of the Royal Society B: Biological Sciences*. doi: [10.1098/rspb.2024.1234](https://royalsocietypublishing.org/doi/10.1098/rspb.2025.0160)

#### 🏪 Funding:
- NWO VENI 2021-2025 (VI.Veni 0.201G.047; "Social Resonance")

          `,
          tags: ["Biomechanics", "Speech", "Multimodal Bioacoustics"],
          projectLeads: [
            { 
              name: " Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "Principal Investigator focused on gesture-speech physics and multimodal communication.", 
              url: "https://www.wimpouw.com",
              role: "Principal Investigator"
            }
          ],
          collaborators: [
            { 
              name: "Šárka Kadavá", 
              image: "images/sarka-kadava.jpg", 
              description: "Expert in social interaction and kinematics and focusing on multimodal communicative behavior and the dynamics between speech and gesture. Specifically, she is interested in the concept of so-called communicative effort, how it can be measured in multimodal interactional settings and how it can inform our understanding of the dynamics of social interaction.", 
              url: "https://sarkadava.github.io/",
              role: "Collaborator, PhD Student, Biomechanics & Semiotics"
            },
            { 
              name: "Susanne Fuchs", 
              image: "images/susanne-fuchs.jpg", 
              description: "Speech motor control expert at ZAS Berlin focusing on respiratory-articulatory coordination in speech production. Expert in experimental phonetics, multimodality, and respiratory kinematics.", 
              url: "https://www.leibniz-zas.de/en/people/details/fuchs-susanne/susanne-fuchs",
              role: "Collaborator, Speech Respiration"
            },
            { 
              name: "Luc Selen", 
              image: "images/luc-selen.jpg", 
              description: "Biomechanics expert and motor neurophysiology at Donders.", 
              url: "https://www.ru.nl/personen/selen-l/",
              role: "Collaborator, Speech Respiration"
            },
            { 
              name: "Steven J. Harrison", 
              image: "images/steven-harrison.PNG", 
              description: "Kinesiology expert and (informal) co-supervisor at UCONN who was crucial for tying in anticipatory postural adjustments into gesture-speech physics and the general research program.", 
              url: "https://kins.uconn.edu/person/steven-harrison/",
              role: "Former co-supervisor, Biomechanics"
            },
            { 
              name: "James Dixon", 
              image: "images/james-dixon.jpg", 
              description: "Expert in self-organizing systems and my former supervisor at UCONN who was crucial in thinking about gesture and speech coupling as a self-organizing process and the general research program.", 
              url: "https://cespa.uconn.edu/person/j-dixon/",
              role: "Former supervisor, Complex Systems"
            },
          ]
        },
        {
          image: "images/flesh.gif",
          title: "FLESH - Experimental Semiotics and Biomechanics",
          description: `A question we ask in project FLESH is what type of flexibility and stability is needed in multimodal coordination to convey a meaning in
 multimodal utterances. We specifically focus on how we can combine movement science and phonetics to study how humans invest multimodal effort to convey meaning. We make use of referential communication games where participants communicate using pantomime and non-linguistic vocalizations, while we collect data about physical effort common in biomechanics (e.g., joint torques, ground-reaction forces, kinematics) and phonetics. The key question is trying to understand what is the benefit of multimodal communication, as so far this is an open question in the evolution of human languages.

#### Video for the general public
<iframe src="https://videopress.com/embed/2CafGfuG" width="320" height="180" frameborder="0" allowfullscreen></iframe>


#### 📰 Recent publications and preregistrations:
- Kadavá, Š., Pouw, W., Fuchs, S., Holler, J., & Ćwiek, A. (2025). Putting in the Effort: Modulation of Multimodal Effort in Communicative Breakdowns during a Gestural-Vocal Referential Game. [OSF Pre-registration](https://osf.io/8ajsg)
- Kadavá, Š., Cwiek, A., Fuchs, S., & Pouw, W. (2024). What do we mean when we say gestures are more expressive than vocalizations? An experimental and simulation study. In Proceedings of the Annual Meeting of the Cognitive Science Society (Vol. 46). doi: [Retrieved from https://escholarship.org/uc/item/2mp1v3v5](https://escholarship.org/uc/item/2mp1v3v5)

#### 🏪 Funding:
- DFG Priority Programme VICOM (PO 2841/1-; "FLESH")

          `,
          tags: ["Biomechanics", "Multimodal Communication"],
          projectLeads: [
            { 
              name: "Šárka Kadavá", 
              image: "images/sarka-kadava.jpg", 
              description: "PhD leading investigator in this project, expertise in multimodal signal processing and interested in the concept of communicative effort.", 
              url: "https://sarkadava.github.io/",
              role: "Leading investigator, PhD Student, Biomechanics & Semiotics"
            },
            { 
              name: "Aleksandra Ćwiek", 
              image: "images/ola-cwiek.jpg", 
              description: "Principal investigator with expertise in iconicity and phonetics.", 
              url: "https://olacwiek.github.io/",
              role: "Principal Investigator"
            },            
            { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "Principal Investigator.", 
              url: "https://www.wimpouw.com",
              role: "Principal Investigator"
            },
            { 
              name: "Susanne Fuchs", 
              image: "images/susanne-fuchs.jpg", 
              description: "Principal Investigator. Multimodal speech motor control expert at ZAS Berlin focusing on respiratory-articulatory coordination in speech production. Expert in experimental phonetics, multimodality, and respiratory kinematics.", 
              url: "https://www.leibniz-zas.de/en/people/details/fuchs-susanne/susanne-fuchs",
              role: "Collaborator, Speech Respiration"
            }
          ],
          collaborators: [
            { 
              name: "Judith Holler", 
              image: "images/judith-holler.jpg", 
              description: "Expert in multimodal communication.", 
              url: "https://www.mpi.nl/people/holler-judith",
              role: "Collaborator"
            }
          ]
        },
        {
          image: "gifs/mmlab1.gif",
          title: "Mobile Open-source Equitable Multimodal Lab",
          description: `Most empirical investigations into human behaviour have relied on unimodal approaches until not so long ago. Today, the main challenges preventing new developments in multimodal research entail setting-up, collecting and analyzing time varying signals with their own modality-characteristic differences that require careful integration and synchronization. 

To address these challenges, we decided to work on a practical manual accompanied by a comprehensive coding library that will enable researchers to build a Mobile Multimodal Lab (MML). The guiding principles behind the MML project are threefold: using (i) open-source resources, researchers will be able to independently assemble a fully functional laboratory that is both (ii) low in monetary cost (i.e., less than 10K) and (iii) easily transportable across testing location to capture multimodal behaviors in a vast range of experimental settings.   

 Specifically, the manual will contain a step-by-step tutorial in setting up the MML using multiple frame-synced 2D videos (e.g., for 3D motion-tracking), audios (e.g., for prosodic or semantic analyses), and physiological signals (e.g., electrocardiogram, electromyography, and respiration) to record either individual participants or multiple interactants. The setup of the MML is modular, meaning that other measuring systems (such as electroencephalograms or eye-tracking devices) can also be incorporated with the above-mentioned recordings. To integrate all these recordings, the MML uses the Lab Streaming Layer (LSL, https://github.com/sccn/labstreaminglayer), an open-sourced, networked middleware that allows to synchronize the different data streams with sub-millisecond precision, thus easing the process of centralized data collection.  

To demonstrate the potentialities of MML, the manual will also include a proof-of-concept experiment in which two participants engage in an interpersonal singing task whilst multiple videos, audios and physiological signals are recorded (see Figure 2). The accompanying coding library will contain all the necessary programing steps employed in this experiment, from the experimental setup and synchronization of multiple recordings to the preprocessing and analysis pipelines of multidimensional timeseries data. 

Thanks to its open-source nature, low-cost of materials, ease of transportation and modularity of recordings, we are hope that the MML project can provide as an example for more equitable research methodologies. 

#### 📰 Recent work using similar setup as mmlab:
- Pouw, W., Burchardt, L., Werner, R., Selen, L. P. J. (2025). The human voice aligns with whole-body kinetics. *Proceedings of the Royal Society B: Biological Sciences*. doi: [10.1098/rspb.2024.1234](https://royalsocietypublishing.org/doi/10.1098/rspb.2025.0160)


#### 🏪 Funding:
- 

          `,
          tags: ["Biomechanics", "Multimodal Communication"],
          projectLeads: [
            { 
              name: "Davide Ahmar", 
              image: "images/davide-ahmar.jpg", 
              description: "Lead developer and researcher of multimodal sigals.", 
              url: "https://www.linkedin.com/in/davide-ahmar-85a244285/?originalSubdomain=nl",
              role: "Leading investigator, PhD Student, Biomechanics & Semiotics"
            },
            { 
              name: "Šárka Kadavá", 
              image: "images/sarka-kadava.jpg", 
              description: "PhD leading investigator in this project, expertise in multimodal signal processing and interested in the concept of communicative effort.", 
              url: "https://sarkadava.github.io/",
              role: "Principal Investigator, PhD Student, Biomechanics & Semiotics"
            },           
            { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "Principal Investigator.", 
              url: "https://www.wimpouw.com",
              role: "Principal Investigator"
            }
          ]
          
        },
        {
          image: "images/proprioception.gif",
          title: "The role of proprioception in motor control and multimodal communication",
          description: `
Proprioception is an underappreciated sense that provides feedback about the position and movement of the body. Ever since my PhD I have been fascinated with original research reporting how gesturing might nevertheless be instantiated in individuals who have lost proprioceptive feedback. How is this possible? What does the reorganization of the motor system look like? Is there a difference between semiotic versus instrumental movements, when it comes to the regulation of movement through proprioception?

I was happy to come in contact with Peggy Mason who has been leading a research programme on investigating rare cases of individuals who have lost proprioception. We are now collaborating and have collected kinematic data to further study how (semiotic) movement is controlled.
      
#### 📰 Relevant publications for this research project:
- Cole, J. (2016). Losing touch: a man without his body. Oxford University Press.
- Pouw, W., Harrison, S. J., & Dixon, J. A. (2022). The importance of visual control and biomechanics in the regulation of gesture-speech synchrony for an individual deprived of proprioceptive feedback of body position. Scientific Reports, 12(1), 14775. doi: [10.1038/s41598-022-18300-x](https://doi.org/10.1038/s41598-022-18300-x)
- Phillips, J. B., Grenoble, L. A., & Mason, P. (2023). The unembodied metaphor: comprehension and production of tactile metaphors without somatosensation. Frontiers in Communication, 8, 1144018. doi: [10.3389/fcomm.2023.1144018](https://doi.org/10.3389/fcomm.2023.1144018)

`,
          tags: ["Multimodal Motor Control"],
           projectLeads: [
          { 
              name: "Peggy Mason", 
              image: "images/peggy-mason.jpg", 
              description: "Expert in neurobiology, project lead and research programme lead ", 
              url: "https://neurobiology.uchicago.edu/faculty/peggy-mason-phd",
              role: "Project lead and research programme lead"
          },
          { 
              name: "Jonathan Cole", 
              image: "images/jonathan-cole.jpg", 
              description: "Expert in neurobiology, project lead and research programme lead ", 
              url: "https://neurobiology.uchicago.edu/faculty/peggy-mason-phd",
              role: "Project lead and research programme lead"
          },
          { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "", 
              url: "https://www.wimpouw.com",
              role: "Lead subproject on kinematic analyses and multimodal communication"
          },
          ]
        },
        {
          image: "images/envisionboxlogo20.png",
          title: "EnvisionBox",
          description: `This platform is to promote a community of learners and a culture of sharing knowledge and labor within fields that work with multimodal data to understand embodied minds in interaction and communication. The platform provides a library of open datasets and analysis pipelines which we hope accelerate the potential of early career researchers who are learning about topic multimodal communication. It further provides a centralized platform for anyone to advertise new tools and datasets. From this platform we regularly launch summerschools and workshops.

#### EnvisionBox Website
- [https://envisionbox.org/](https://envisionbox.org/)

#### 🏪 Funding:
- Donders Collaboration Fund (2025; EnvisionBoxBaby); with Sabine Hunnius, Yayun Zhang, and Caroline Rowland.
                    
          `,
          tags: ["Open Science", "Social Signal Processing", "Multimodal Data Science and AI"],
          projectLeads: [
          { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "Core team member and initiatior. Main lead of envisionbox.", 
              url: "https://www.wimpouw.com",
              role: "Principal Investigator"
          },
          { 
              name: "Babajide Owoyele", 
              image: "images/babajide-owoyele.jpg", 
              description: "Core team member and initiatior.", 
              url: "https://hpi.de/dtrp/personen/teilnehmer/babajide-owoyele.html",
              role: "Core team member"
            },
          { 
              name: "James Trujillo", 
              image: "images/james-trujillo.jpg", 
              description: "Core team member and initiatior.",
              url: "https://jptrujillo.github.io/",
              role: "Core team member"
          },
          {
              name: "Davide Ahmar",
              image: "images/davide-ahmar.jpg",
              description: "Core team member. New member of EnvisionBox development team.",
              url: "https://www.linkedin.com/in/davide-ahmar-85a244285/?originalSubdomain=nl",
              role: "Core team member"              
          },
          ],
          collaborators: [
            { 
              name: "Aleksandra Ćwiek", 
              image: "images/ola-cwiek.jpg", 
              description: "Former core member and co-initiator of envisionbox.", 
              url: "https://olacwiek.github.io/",
              role: "Principal Investigator"
            },
            { 
              name: "Šárka Kadavá", 
              image: "images/sarka-kadava.jpg", 
              description: "Key contributor and co-organizer of envisionbox summerschools.", 
              url: "https://sarkadava.github.io/",
              role: "Collaborator, PhD Student, Biomechanics & Semiotics"
            }]
        },
        {
          image: "images/visual_abstractenvisoinhgdetector.png",
          title: "EnvisionHGdetector & SMASH & Masking for Privacy",
          description: `Utilization of machine learning and computer vision for co-speech gesture detection and other multimodal signals, automated analysis, as well as ethical archiving. 

#### 📰 Recent publication on gesture-speech physics:
- Pouw, W., Yung, B., Shaikh, S. A., Trujillo, J., Rueda-Toicen, A., de Melo, G., & Owoyele, B. (2025). EnvisionHGdetector: A Computational Framework for Co-Speech Gesture Detection, Kinematic Analysis, and Interactive Visualization. doi: [10.31234/osf.io/psg5f_v1](https://doi.org/10.31234/osf.io/psg5f_v1)
- Owoyele, B. A., Schilling, M., Sawahn, R., Kaemer, N., Zherebenkov, P., Verma, B., Pouw, W. & de Melo, G. (2024). MaskAnyone Toolkit: Offering Strategies for Minimizing Privacy Risks and Maximizing Utility in Audio-Visual Data Archiving. arXiv preprint arXiv:2408.03185.
- Owoyele, B., Trujillo, J., De Melo, G., & Pouw, W. (2022). Masked-Piper: Masking personal identities in visual recordings while preserving multimodal information. SoftwareX, 20, 101236. doi: [10.1016/j.softx.2022.101236)](https://doi.org/10.1016/j.softx.2022.101236)

#### 🏪 Funding:
- NWO XS grant SMASH (406.XS.24.01.043)
- NWO TDCC GRANT (TDCC-SSH-C2024-011; “SYNAPSIS: Synergy Network and Platform for Integrating Audiovisual Data Archiving and Stewardship in Social Sciences"; with Mark Dingemanse, Bogdana Huma, Henk van de Heuvel, Inge Slouwerhof.
                    
          `,
          tags: ["Computer Vision", "AI", "Visualization", "Archivin"],
          projectLeads: [
          { 
              name: "Babajide Owoyele", 
              image: "images/babajide-owoyele.jpg", 
              description: "Principal Investigator EnvisionHGdetector + SMASH + Masking for Privacy (including TDCC).", 
              url: "https://hpi.de/dtrp/personen/teilnehmer/babajide-owoyele.html",
              role: "Principal Investigator EnvisionHGdetector + SMASH + Masking for Privacy (including PI of TDCC)."
            },
            { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "Principal Investigator EnvisionHGdetector + SMASH + TDCC (co-pi).", 
              url: "https://www.wimpouw.com",
              role: "Principal Investigator EnvisionHGdetector + SMASH + TDCC (Co-pi)."
            },
          { 
              name: "Gerard de Melo", 
              image: "images/gerard-demelo.webp", 
              description: "Principal Investigator SMASH + Masking for Privacy (Co-pi).", 
              url: "https://hpi.de/en/d-school/person/gerard-de-melo/",
              role: "Principal Investigator SMASH + Masking for Privacy (Co-pi)."
          },
          { 
              name: "James Trujillo", 
              image: "images/james-trujillo.jpg", 
              description: "Co-pi TDCC project and collaborator on EnvisionHGdetector.",
              url: "https://jptrujillo.github.io/",
              role: "Co-pi TDCC project and collaborator on EnvisionHGdetector."
          }
          ],
        },
        {
          image: "images/siamang.gif",
          title: "Data Science & AI for Multimodal Bioacoustics: Siamang",
          description: `

The Gibbons, also known as the Small Asian Apes (*Hylobatids*), are known for characteristic behavioral and morphological traits. They produce very loud (McAngus Todd & Merker, 2004; Terleph et al., 2016) duetting songs for territorial advertisement (Geissmann, 2000; Mitani, 1985), pair bonding (Geissmann, 1999), and in some instances to alarm about predators (Clarke et al., 2006). They are extremely fast hand-over-hand brachiators, moving over 40 km/h through the canopies (Cheyne, 2011). During song climaxes, they also brachiate in a seemingly performative way, sometimes referred to as "locomotion displays" (Liebal, 2016) or "locomotion calls" (Tembrock, 1974).

The speed and agility of their (co-vocal) movements seem to be enabled by unique biomechanical and neural-cognitive adaptations: Long pectoral limbs relative to the lower limbs (Hunt, 2016), a stiff rib cage, and hypermobile shoulder joints (Cheyne, 2011), and highly energetically optimized brachiation strategy (Bertram, 2004) together with neural adaptations associated with postural and rhythmic motor control processes (MacLeod et al., 2003). These Small Asian Apes are primarily arboreal and one of the few "true" brachiators (i.e., they primarily use their pectoral limbs for locomotion), and (in the wild) they only occasionally locomote on the forest floors (Cannon & Leighton, 1994). But when they do: They move bipedally, in contrast to all other apes, except humans.

The Siamang (*Symphalangus syndactylus*) is one particular species of the Hylobatid family and is the only member of its genus. Under close inspection here, Siamang are differentiated by having one of the largest laryngeal air sacs in extant primates relative to body size, which is a respiratory modification that has been associated with their high-energy vocal capabilities (de Boer, 2009; Riede et al., 2008). Siamangs also differentiate from the other Small Asian Apes in their large body size, about 1.5x to 2x larger.

## Available Dataset

We haved collected a rich audio-visual dataset suitable for motion and acoustic analyses of a family of five Siamang individuals.

### Main Research Questions:

**Question 1:** What is the dynamic relation between air sac radiation and song patterning? What is the relation of air sac deflation-inflation, nose and mouth opening, and sound production?

**Question 2:** How do posture (static variable) and locomotion (dynamic variable) relate to ongoing song patterning in Siamang? During co-vocal locomotion displays, do brachiation cycles and vocal cycles synchronize?

**Question 3:** How does collective movement structure relate to the collective song structure?

#### 📰 Recent publication on gesture-speech physics:
- Burchardt, L. B., van de Sande, Y., Kehy, M., Gamba, M., Ravignani, A., Pouw, W. (2025). A toolkit for the dynamic study of air sacs in siamang and other elastic circular structures. *PLOS Computational Biology*. doi: [10.1371/journal.pcbi.1012222](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012222)
- Pouw, W., Kehy, M., Gamba, M., Ravignani, A. (2023). Amplitude Increases of Vocalizationsare Associated with Body Accelerations in Siamang (*Symphalangus syndactylus*). EcoEvoarXiv preprint. doi: [10.32942/X2C595](https://doi.org/10.32942/X2C595)

#### 🏪 Funding:
- Donders Postdoc Development Fund
`,
          tags: ["Multimodal Bioacoustics","Comparative Psychobiology", "Data Science and AI"],
           projectLeads: [
            { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "", 
              url: "https://www.wimpouw.com",
              role: "Project lead"
            },
          { 
              name: "Andrea Ravignani", 
              image: "images/andrea-ravignani.jpg", 
              description: "Bioacoustics expert at Sapienza University of Rome", 
              url: "https://ravignani.wordpress.com/",
              role: "Project lead"
            },
          { 
              name: "Marco Gamba", 
              image: "images/marco-gamba.png", 
              description: "Primatology and bioacoustics expert at the University of Torino", 
              url: "https://scholar.google.com/citations?user=80EPZywAAAAJ&hl=en",
              role: "Project lead"
            }],
          collaborators: [
            { 
              name: "Mounia Kehy", 
              image: "images/mounia-kehy.jpg", 
              description: "Bioacoustics Msc at University of Saint Etienne (now animal keeper at Paris Zoological Park)", 
              url: "https://www.linkedin.com/in/mounia-kehy-78a548194/?originalSubdomain=fr",
              role: "Msc in Bioacoustics who collected the dataset (with Wim Pouw)"
            },
             { 
              name: "Lara Burchardt", 
              image: "images/lara-burchardt.jpg", 
              description: "Bioacoustics and data science expert at Humboldt University of Berlin", 
              url: "https://scholar.google.com/citations?user=aGkKGwgAAAAJ&hl=de",
              role: "Sub project lead on investigating air sac dynamics, Bioacoustics"
            }
          ]
        },
        {
          image: "images/analysis_video_1.gif",
          title: "Data Science & AI for Multimodal Bioacoustics: Green-rumped Parrotlet",
          description: `

The Green-rumped Parrotlet (*Forpus passerinus*) is a small parrot species native to South America. These birds are highly social and engage in complex vocalizations. Due to shared interests in comparative psychobiology and because we see potential homologies between parrotlet vocal-motor development and humans, we are currently developing out a project for the dynamic study of vocalization and rhythmic motor behavior in developing and adult parrotlets. This projects requires some specific innovations in data science and computer vision that we aim to apply in this project.

#### 📰 Relevant publication for this research project:
- Berg, K. S., Beissinger, S. R., & Bradbury, J. W. (2013). Factors shaping the ontogeny of vocal signals in a wild parrot. Journal of Experimental Biology, 216(2), 338-345. doi: [10.1242/jeb.073502](https://doi.org/10.1242/jeb.073502)
- Pouw, W., & Fuchs, S. (2022). Origins of vocal-entangled gesture. Neuroscience & Biobehavioral Reviews, 141, 104836. doi: [10.1016/j.neubiorev.2022.104836](https://doi.org/10.1016/j.neubiorev.2022.104836)

`,
          tags: ["Multimodal Bioacoustics","Comparative Psychobiology", "Data Science and AI"],
           projectLeads: [
            { 
              name: "Karl Berg", 
              image: "images/karl-berg.jpg", 
              description: "Expert in Ornithology", 
              url: "https://scholar.google.com.ec/citations?user=Z7eUXUcAAAAJ&hl=es",
              role: "Project lead and research programme lead"
            },
          { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "", 
              url: "https://www.wimpouw.com",
              role: "Collaborator and lead of this specific project"
          },
          ]
        },
        {
          image: "gifs/example_dashboard.gif",
          title: "Data Science & Multimodal Vocal Performances",
          description: `

I have been working with the musicologist Lara Pearson on trying to apply dynamic analysis of gesture in the context of understanding singing performance. We share interests in understanding how gesture and vocalization are entangled on different levels from perspectives of ecological psychology and complex systems.

#### 📰 Publications:
- Pearson, L., & Pouw, W. (2022). Gesture–vocal coupling in Karnatak music performance: A neuro–bodily distributed aesthetic entanglement. *Annals of the New York Academy of Sciences*, 1515(1), 219-236. doi: [10.1111/nyas.14806](https://doi.org/10.1111/nyas.14806)
- Pearson, L., Nuttall, T., & Pouw, W. (2024, Preprint). The co-structuring of gesture-vocal dynamics in Karnatak music performance. https://doi.org/10.31234/osf.io/npm96

`,
          tags: ["Multimodal Bioacoustics","Computer vision", "Data Science and AI"],
           projectLeads: [
            { 
              name: "Lara Pearson", 
              image: "images/lara-pearson.jpg", 
              description: "Expert in Music Performance and Ethnomusicology", 
              url: "https://scholar.google.com/citations?user=Y4jdiz8AAAAJ&hl=en",
              role: "Project lead and research programme lead"
            }
          ],
          collaborators: [
         { 
              name: "Thomas Nuttall", 
              image: "images/thomas-nuttall.jpg", 
              description: "Expert in Computational Musicology", 
              url: "https://thomasgnuttall.github.io/about/",
              role: "Collaborator"
          },
        { 
              name: "Wim Pouw", 
              image: "images/wim-pouw.PNG", 
              description: "", 
              url: "https://www.wimpouw.com",
              role: "Collaborator"
          }]
        }
      ],
      // ############################## Funding ##############################
      funding: [
        {
          image: "images/internship.jpg",
          title: "Research Visits & Internships",
          description: `Short-term or long-term internships for (PhD) researchers, or students. 

These collaborative opportunities allow for:
- Mentorship
- Knowledge exchange
- Development of joint research initiatives and grant applications
- Cross-institutional collaboration`,
          button: { text: "Email me", url: "mailto:w.pouw@tilburguniversity.edu" },
          isInternship: true, // Flag to indicate this is an internship card
          previousInterns: [
            {
              name: "Shuguang Sheng", 
              image: "images/shuguang-sheng.jpg",
              description: "Shuguang Sheng is working on an ecological EMG experiment to gesture-speech physics and will be a data science project on the topic.",
              role: "Research Intern and MA thesis 2025 till 2026",
              url: "https://www.linkedin.com/in/shuguang-sheng-39b39a293/?originalSubdomain=nl"
            },
            {
              name: "Davide Ahmar",
              image: "images/davide-ahmar.jpg",
              description: "Davide Ahmar has worked with me and Sarka Kadava to build a tutorial for building a multimodal mobile lab.",
              role: "Intern and MA thesis 2025",
              url: "https://www.linkedin.com/in/davide-ahmar-85a244285/?originalSubdomain=nl"
            },
            {
              name: "Rui Liu",
              image: "images/rui-liu.jpg",
              description: "Rui Liu did an internship at Donders for a few months working on kinematic analysis if signers and speakers.",
              role: "Internship 2024",
              url: "https://scholar.google.com/citations?hl=en&user=osOOy_QAAAAJ&view_op=list_works&sortby=pubdate"
            },
            {
              name: "Doenja\n Hustin", 
              image: "images/doenja-hustin.jpg",
              description: "Doenja Hustin has worked on python and R programming for kinematic-acoustic analysis for a project on L2 prosody (wiht Lieke van Maastricht, Hans-Rutger Bosker, Marieke Hoetjes).",
              role: "Research Intern 2025",
              url: "https://www.linkedin.com/in/doenja-hustin-0aab40290/?originalSubdomain=nl"
            },
             { 
              name: "Mounia Kehy", 
              image: "images/mounia-kehy.jpg", 
              description: "Internship for collecting and analyzing primate multimodal bioacoustics data (now animal keeper at Paris Zoological Park)", 
              role: "Intersnhip 2023",
              url: "https://www.linkedin.com/in/mounia-kehy-78a548194/?originalSubdomain=fr"
            },
          {
              name: "Chiara Luna Rivolta", 
              image: "images/chiara-rivolta.jpg",
              description: "Chiara Rivolta was a visiting research working on kinematics of signed languages compared to co-speech gesture.",
              role: "Visiting researcher 2022",
              url: "https://www.bcbl.eu/en/conocenos/equipo/chiara-luna-rivolta"
            },
            {
              name: "Juliette Lozano-Goupil", 
              image: "images/juliette-lozano-goupil.jpg",
              description: "Juliette Lozano-Goupil had a short training stay for learning to do multimodal data wranling in R.",
              role: "Research Intern 2022",
              url: "https://orcid.org/0000-0001-5919-7045"
            }
          ]
        },
        {
          image: "images/marie-curie.jpg",
          title: "Marie Skłodowska-Curie Fellowships",
          description: `Funding for postdoctoral researchers who would like to do research for one or two years at another lab abroad. Candidates are eligible with up to 8 years of research experience. I am happy to support trying to host you in Tilburg, or connect you with my colleagues, to help you with the application.`,
          button: { text: "Learn More", url: "https://marie-sklodowska-curie-actions.ec.europa.eu/" }
        },
        {
          image: "images/fyssen.png",
          title: "Fyssen (French) Postdoctoral Fellowships",
          description: `Funding for French postdoctoral researchers who would like to do research for one or two years at another lab abroad. . I am happy to support trying to host you in Tilburg, or connect you with my colleagues, to help you with the application.`,
          button: { text: "Learn More", url: "https://www.fondationfyssen.fr/en/our-actions/study-grants/" }
        }
      ],
      // ############################## ideas ##############################
      ideas: [
        {
          image: "gifs/overview_video.gif",
          title: "Any project within ongoing projects listed above",
          description: `

Most of the ideas listed here in research ideas are things that are a bit more peripheral to my main research but that interest me. Closest to my concerns are the ongoing projects listed above, and I would be happy to support any further project idea on the topic of:

- Multimodal communication
- Multimodal bioacoustics
- Gesture-speech physics
- Multimodal data science and AI
- Multimodal signal processing
- Multimodal motor control
- Multimodal Open Science

`,          
          tags: ["Multimodality"],
          collaborators: [ { name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Collaborator" }]
        },
        {
          image: "images/heartbeat.gif",
          title: "Machine learning methods for improving extraction of heartbeats and heartrate from audio(-visual) data",
          description: `

There has been a wave of studies in bioacoustics and medical computer science literature that heart beats (the particular time of heart beats) and heart rate (the timing interval between heart beats) can be extracted to some degree from the voice acoustics. For some reason this research has dwindled in the last decades. Interestingly, now tools have become available to determine heart rate from videos of human faces, which change coloring ever so slightly during heart beat cycles. 

#### Applications
- Improve methods for heart rate detections from voice, which can aid in the detection of stress and other emotional states (e.g., in non-human animals)
- Improve heart rate detection from video, with added predictive value of audio cues
- Help detection of deep fakes and other manipulated videos

#### Available data resources for this project:
We have a dataset with ground-truth heart beat and vocalization data, where we have preliminary evidence for effects on voice of the heart. There are some open datasets on heart rate and speech. 

#### 📰 Relevant publications for this research project:
- Milton, A., & Monsely, K. A. (2018). Tamil and English speech database for heartbeat estimation. International Journal of Speech Technology, 21(4), 967–973. https://doi.org/10.1007/s10772-018-9557-y
- Orlikoff, R. F., & Baken, R. J. (1989). The effect of the heartbeat on vocal fundamental frequency perturbation. Journal of Speech and Hearing Research, 32(3), 576–582. https://doi.org/10.1044/jshr.3203.576
- Frontier, A. P. (2024). Computer Vision in Heart Rate. Innovations in Cybersecurity and Data Science: Proceedings of ICICDS 2024, 437.
- Boccignone, G., Conte, D., Cuculo, V., D’Amelio, A., Grossi, G., Lanzarotti, R., & Mortara, E. (2022). pyVHR: a Python framework for remote photoplethysmography. PeerJ Computer Science, 8, e929.
`,          
          tags: ["Computer science", "Classification", "Time-varying events"],
          collaborators: [ { name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Collaborator" }]
        },
        {
          image: "images/ex.gif",
          title: "(Real-time) Multimodal Communication Classification (Using Machine Learning)",
          description: `There is a need for out-of-the box automatic classifiers for communicative behaviors such as head nods, co-speech gesture types, and different types of communicative postures. So far methods have been developed for specific datasets, but there is a need for a more generalizable approach that can be used across different datasets. 

#### Available data resources for this project:
We have a large curated dataset of annotated multimodal behaviors that can be used to train and test classifiers.

#### 📰 Relevant publications for this research project:
- Pouw, W., Yung, B., Shaikh, S. A., Trujillo, J., Rueda-Toicen, A., de Melo, G., & Owoyele, B. (2025). EnvisionHGdetector: A Computational Framework for Co-Speech Gesture Detection, Kinematic Analysis, and Interactive Visualization. doi: [10.31234/osf.io/psg5f_v1](https://doi.org/10.31234/osf.io/psg5f_v1) 
`,          
          tags: ["Computer science", "Classification", "Time-varying events"],
          collaborators: [ { name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Research Lead" }, { name: "Babajide Owoyele", image: "images/babajide-owoyele.jpg", role: "Collaborator" }]
        },
        {
          image: "images/pouwmultilevel.PNG",
          title: "How can we test the oscillator model of turn-taking?",
          description: `There is a well-known and highly cited model of turn-taking in conversation that is based on the idea that speakers and listeners act like coupled oscillators, which determine turn transfer off-sets. This model has been tested in a few ways, for example in non-human animals, but it is actually not clear how well it holds up to empirical data in humans, and despite its fame I think methods are lacking to explicitly test for the model in human speech.
          
The main idea is that there is rhythmic structure in speech that allows you to time taking the next turn in conversation. What precise rhythmic structure is attuned to in humans is not precisely clear, and need not be at the level of the syllable. 

I believe with methods from signal processing we can devise a method to test the oscillator model of turn-taking, specifically by using empirical mode decomposition (EMD) to extract the rhythmic structure of speech and then test how well it predicts turn transfer off-sets. Also I think we need to theoretically work out when we can say that this model has been falsified (in order for the theory to still be doing productive work in our understanding of the dynamic unfolding of turn taking).

#### Available data resources for this project:
There are open datasets on converstional timing available.

#### 📰 Relevant publications for this research project:
- Wilson, M., & Wilson, T. P. (2005). An oscillator model of the timing of turn-taking. Psychonomic bulletin & review, 12, 957-968. [10.3758/BF03206432](https://doi.org/10.3758/BF03206432)
- Takahashi, D. Y., Narayanan, D. Z., & Ghazanfar, A. A. (2013). Coupled oscillator dynamics of vocal turn-taking in monkeys. Current Biology, 23(21), 2162-2168. [10.1016/j.cub.2013.09.005](https://www.cell.com/current-biology/fulltext/S0960-9822(13)01117-2?script=true&mobileUi=0)
- Pouw, W., & Holler, J. (2022). Timing in conversation is dynamically adjusted turn by turn in dyadic telephone conversations. Cognition, 222, 105015. [10.1016/j.cognition.2022.105015](https://doi.org/10.1016/j.cognition.2022.105015)
- Tilsen, S., & Arvaniti, A. (2013). Speech rhythm analysis with decomposition of the amplitude envelope: Characterizing rhythmic patterns within and across languages. The Journal of the Acoustical Society of America, 134(1), 628-639. [10.1121/1.4807565](https://doi.org/10.1121/1.4807565) 
          
`,          
          tags: ["Data Science", "Signal Processing", "Turn Taking"],
          collaborators: [ { name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Research Lead" }, { name: "Judith Holler", image: "images/judith-holler.jpg", role: "Collaborator" }]
        },
        {
          image: "images/timingcentrallimit.JPG",
          title: "Timing distributions and the central-limit theorem",
          description: `Zero-Mean, “Peaked’’, Guassian Distributions of between-event timing are often interpreted as suggestive evidence for temporal coupling in research on communication in human and non-human animals. This includes “rapid” turn transitions in conversations, articulatory-phonetic intermodal events, and gesture and speech timing research, amongst a range of other research in communication and (psycho-)linguistics. However, random unrelated events can easily produce Zero-mean, Single-“Peaked’’, Gaussian Distributions. What has been regarded as correlated temporal activity, may in fact reflect random processes.  While it is likely that many processes described with timing normal distributions in the field are based on fully independent processes, no adequate statistical methods have been employed to safely conclude temporal dependence in many (important) studies in this field. 
          
This project would require someone with an interest in statistical data science, who would devise methods to improve reporting on multimodal timing and turn taking literature, whereby our devised measures would invite the community to test explicitly for deviances from randomness in timing distributions.

#### Available data resources for this project:
There are open datasets on converstional and multimodal timing available.

#### 📰 Relevant publications for this research project:
- Badihi, G., Graham, K. E., Grund, C., Safryghin, A., Soldati, A., Donnellan, E., Hashimoto, C., Mine, J. G., Piel, A. K., Stewart, F., Slocombe, K. E., Wilke, C., Townsend, S. W., Zuberbühler, K., Zulberti, C., & Hobaiter, C. (2024). Chimpanzee gestural exchanges share temporal structure with human language. Current Biology, 34(14), R673–R674. https://doi.org/10.1016/j.cub.2024.06.009
- Stivers, T., Enfield, N. J., Brown, P., Englert, C., Hayashi, M., Heinemann, T., Hoymann, G., Rossano, F., Ruiter, J. P. de, Yoon, K.-E., & Levinson, S. C. (2009). Universals and cultural variation in turn-taking in conversation. Proceedings of the National Academy of Sciences, 106(26), 10587–10592. https://doi.org/10.1073/pnas.0903616106
- Leonard, T., & Cummins, F. (2011). The temporal relation between beat gestures and speech. Language and Cognitive Processes, 26 (10), 1457–1471.
- Pouw, W., & Dixon, J. A. (2019). Quantifying gesture-speech synchrony. Proceedings of the 6th Meeting of Gesture and Speech in Interaction, 68–74. 
`,          
          tags: ["Data Science", "Timing", "Turn Taking"],
          collaborators: [ { name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Collaborator" }, 
            { name: "Olcay Turk", image: "images/olcay-turk.jpg", role: "Collaborator" },
            { name: "Judith Holler", image: "images/judith-holler.jpg", role: "Collaborator" },
            { name: "Martine Grice", image: "images/martine-grice.jpg", role: "Collaborator" }
           ]
        },
        {
          image: "images/flesh.gif",
          title: "Predicting Critical Phase Changes in Meaning-making from Postural Sway",
          description: `We have collected data on people performing a charade game, where they convey certain concepts to another person without the use of language. The viewer/listener then predicts the concept being conveyed. Sometimes a concept is difficult to convey, and people need to reorganize their experession strategy. From dynamical systems perspectives, before a certain drastically reorganizes, there will be "critical" fluctuations that should be detectable before the change in the system happens. I think it would be a great project to apply dynamical systems methods to assess from postural sway timeseries, whether we can predict whether a person will change their meaning-making strategy in a charade game. 

#### 📰 Relevant publications for this research project:

- Kadavá, Š., Pouw, W., Fuchs, S., Holler, J., & Ćwiek, A. (2025). Putting in the Effort: Modulation of Multimodal Effort in Communicative Breakdowns during a Gestural-Vocal Referential Game. [OSF Pre-registration](https://osf.io/8ajsg)
- Scheffer, M., Bascompte, J., Brock, W. A., Brovkin, V., Carpenter, S. R., Dakos, V., ... & Sugihara, G. (2009). Early-warning signals for critical transitions. Nature, 461(7260), 53-59.
- Anastas, J. R., Kelty-Stephen, D. G., & Dixon, J. A. (2014). Executive function as an interaction-dominant process. Ecological Psychology, 26(4), 262-282.

`,
          tags: ["Biomechanics", "Meaning", "Expression"],
          collaborators: [{ name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Collaborator" }, 
            { name: "Sarka Kadava", image: "images/sarka-kadava.jpg", role: "Collaborator" }, 
            { name: "Susanne Fuchs", image: "images/susanne-fuchs.jpg", role: "Collaborator" },
            { name: "Aleksandra Cwiek", image: "images/aleksandra-cwiek.jpg", role: "Collaborator" }
          ]
        },
        {
          image: "images/pouwjenkins.png",
          title: "Gesture embedding spaces in Aphasia, Deafferentation, versus Neurotypical Speakers",
          description: `Applying **gesture kinematic network analysis techniques** to gesture kinematics in clinical populations (Aphasia) and (Deafferentation). 

It would be valuable to study the kinematic content of gesture patterns in individuals with afflictions that hamper communication or motor control, such as people with different forms of Aphasia. So far we have only performed studies gesture-vocal synchrony, and the traditional literature has primarily focused on counting the frequency rather than comptutationally studying the form of gestures to assess how gesture dynamics might differ for different non-neural typical groups.

**Applications:**
- Early detection of communication disorders
- Treatment monitoring
- Understanding cognitive-motor relationships

#### Available data resources for this project:
My collaborator Theodore Jenkins and I have been curating a annotated dataset from the AphasiaBank database. We further have collected a dataset on two persons with a lack of proprioception.

#### 📰 Relevant publications for this research project:
- Pouw, W., & Dixon, J. A. (2020). Gesture networks: Introducing dynamic time warping and network analysis for the kinematic study of gesture ensembles. Discourse Processes, 57(4), 301-319.
- Jenkins, T., & Pouw, W. (2023). Gesture–speech coupling in persons with aphasia: A kinematic-acoustic analysis. Journal of Experimental Psychology: General, 152(5), 1469.
- Stark, B. C., Clough, S., & Duff, M. (2021). Suggestions for improving the investigation of gesture in aphasia. Journal of Speech, Language, and Hearing Research, 64(10), 4004-4013.
- Pouw, W., Harrison, S. J., & Dixon, J. A. (2022). The importance of visual control and biomechanics in the regulation of gesture-speech synchrony for an individual deprived of proprioceptive feedback of body position. Scientific Reports, 12(1), 14775. doi: [10.1038/s41598-022-18300-x](https://doi.org/10.1038/s41598-022-18300-x)
- Phillips, J. B., Grenoble, L. A., & Mason, P. (2023). The unembodied metaphor: comprehension and production of tactile metaphors without somatosensation. Frontiers in Communication, 8, 1144018. doi: [10.3389/fcomm.2023.1144018](https://doi.org/10.3389/fcomm.2023.1144018)

`,
          tags: ["Clinical", "Network Analysis", "Kinematic Analysis"],
          collaborators: [{ name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Collaborator" },
            { name: "Theodore Jenkins", image: "images/ted-jenkins.jpg", role: "Collaborator" },
            { name: "Peggy Mason", image: "images/peggy-mason.jpg", role: "Collaborator" }
          ]
        },
        {
          image: "images/ikscaling.gif",
          title: "Biomechanical-aligned Annotation Schemes",
          description: `In research on **social bodily signaling** in animals as well as humans it is not uncommon to use coding schemes that are maximally "low-level" so as to then apply data-driven methods to cluster for meaningful signals.  However, the coding schemes are often not based on biomechanic models (i.e., the posture represented in joint angle space). A scientific advance in Cognitive Science and AI would be to develop an application that loads an image, generates a temporary estimated pose from a 3D skeletal model, which is then modified by the user to match the pose of the animal in a frame. 

I think a versatile application that allows to annotate an image by manipulating a 3D model of the human or non-human animal (as to then save the joint-space representation) may provide researchers a tool for annotation that is biomechanically informative and maximally low-level.

**Challenges:**
- Computer vision pose tracking in non-human animals is still more challenging than human pose tracking
- There are not a lot of 3D models of animal skeletons available that might be readily reusable (so we might need to start with humans)
- We need to validate how realiable the annotation is against ground-truth data.

#### 📰 Relevant publications for this research project:
- Grund, C., Badihi, G., Graham, K. E., Safryghin, A., & Hobaiter, C. (2024). GesturalOrigins: A bottom-up framework for establishing systematic gesture data across ape species. Behavior research methods, 56(2), 986-1001.
- Lausberg, H., & Sloetjes, H. (2016). The revised NEUROGES–ELAN system: An objective and reliable interdisciplinary analysis tool for nonverbal behavior and gesture. Behavior research methods, 48, 973-993.

`,
          tags: ["Software", "Metrics", "Annotation Schemes"],
          collaborators: [
            { name: "Wim Pouw", image: "images/wim-pouw.PNG", role: "Research Lead" }
          ]
        },
      ]
    };

     // CREATE MODAL CONTAINER
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <div class="modal-image-container">
          <img src="" alt="Expanded image" class="modal-image">
        </div>
        <div class="modal-text-container">
          <h2 class="modal-title"></h2>
          <div class="modal-tags"></div>
          <div class="modal-description"></div>
          <div class="modal-project-leads"></div>
          <div class="modal-collaborators"></div>
          <div class="modal-previous-interns"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modalContainer);

    // Setup modal functionality
    const closeButton = modalContainer.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      modalContainer.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        modalContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
        modalContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // HELPER FUNCTION - Create cards from data
    function createCards(data, hasButton = false, hasCollaborators = false) {
      return data.map(item => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Store the full item data as a property for later use in modal
        card.cardData = item;
        
        // Truncate description for card preview (strip HTML and limit length)
        const truncatedDescription = item.description.replace(/[*_#`]/g, '').substring(0, 150) + 
          (item.description.length > 150 ? '...' : '');
        
        let html = `
          <img src="${item.image}" alt="${item.title}" class="thumbnail-image" 
               onerror="this.src='images/DIMSvisualizer.PNG'; this.style.opacity='0.6';">
          <h3>${item.title}</h3>
          <p>${truncatedDescription}</p>
        `;
        
        if (item.tags && item.tags.length > 0) {
          html += `<div class="tags-container">`;
          item.tags.forEach(tag => {
            html += `<span class="tech-tag">${tag}</span>`;
          });
          html += `</div>`;
        }
        
        if (hasButton && item.button) {
          html += `<a href="${item.button.url}" class="card-button">${item.button.text}</a>`;
        }
        
        // Show collaborator avatars OR previous interns as small circles if present
        if (hasCollaborators) {
          // Check if this is an internship card with previous interns
          if (item.isInternship && item.previousInterns && item.previousInterns.length > 0) {
            html += `<div class="collaborators-preview">`;
            html += `<span style="font-size: 0.75rem; color: #059669; margin-right: 0.5rem; font-weight: 600;">Previous Interns:</span>`;
            
            item.previousInterns.forEach((intern, index) => {
              if (index < 2) { // Show only first 2 previous interns in the card
                html += `<div class="collaborator-avatar" title="${intern.name} - ${intern.role || 'Former Intern'}" style="border: 2px solid #d1fae5; z-index: 10;">
                          <img src="${intern.image}" alt="${intern.name}" 
                               onerror="this.src='images/default-avatar.png'; this.style.opacity='0.6';" loading="eager">
                        </div>`;
              }
            });
            
            if (item.previousInterns.length > 2) {
              html += `<div class="collaborator-count" style="background-color: #d1fae5; color: #059669;">+${item.previousInterns.length - 2}</div>`;
            }
            
            html += `</div>`;
          }
          // Regular collaborator logic
          else if (item.collaborators && item.collaborators.length > 0) {
            html += `<div class="collaborators-preview">`;
            
            // If there are project leads, show them first with a different label
            if (item.projectLeads && item.projectLeads.length > 0) {
              html += `<span style="font-size: 0.75rem; color: #3b82f6; margin-right: 0.5rem; font-weight: 600;">Lead:</span>`;
              
              item.projectLeads.forEach((lead, index) => {
                if (index < 1) { // Show only first project lead in the card
                  html += `<div class="collaborator-avatar" title="${lead.name} - ${lead.role || 'Project Lead'}" style="border: 2px solid #dbeafe; z-index: 10;">
                            <img src="${lead.image}" alt="${lead.name}" 
                                 onerror="this.src='images/default-avatar.png'; this.style.opacity='0.6';" loading="eager">
                          </div>`;
                }
              });
              
              if (item.projectLeads.length > 1) {
                html += `<div class="collaborator-count" style="background-color: #dbeafe; color: #3b82f6;">+${item.projectLeads.length - 1}</div>`;
              }
              
              // Add separator if there are also collaborators
              if (item.collaborators.length > 0) {
                html += `<span style="margin: 0 0.5rem; color: #9ca3af;">•</span>`;
              }
            }
            
            // Add collaborators if there are any
            if (item.collaborators.length > 0) {
              html += `<span style="font-size: 0.75rem; color: #6b7280; margin-right: 0.5rem;">Collabs:</span>`;
              
              item.collaborators.forEach((collaborator, index) => {
                if (index < 2) { // Show only first 2 collaborators in the card
                  html += `<div class="collaborator-avatar" title="${collaborator.name} - ${collaborator.role || 'Collaborator'}">
                            <img src="${collaborator.image}" alt="${collaborator.name}" 
                                 onerror="this.src='images/default-avatar.png'; this.style.opacity='0.6';">
                          </div>`;
                }
              });
              
              if (item.collaborators.length > 2) {
                html += `<div class="collaborator-count">+${item.collaborators.length - 2}</div>`;
              }
            }
            
            html += `</div>`;
          }
          // Show only project leads if there are no collaborators
          else if (item.projectLeads && item.projectLeads.length > 0) {
            html += `<div class="collaborators-preview">`;
            html += `<span style="font-size: 0.75rem; color: #3b82f6; margin-right: 0.5rem; font-weight: 600;">Lead:</span>`;
            
            item.projectLeads.forEach((lead, index) => {
              if (index < 2) { // Show only first 2 project leads in the card
                html += `<div class="collaborator-avatar" title="${lead.name} - ${lead.role || 'Project Lead'}" style="border: 2px solid #dbeafe; z-index: 10;">
                          <img src="${lead.image}" alt="${lead.name}" 
                               onerror="this.src='images/default-avatar.png'; this.style.opacity='0.6';">
                        </div>`;
              }
            });
            
            if (item.projectLeads.length > 2) {
              html += `<div class="collaborator-count" style="background-color: #dbeafe; color: #3b82f6;">+${item.projectLeads.length - 2}</div>`;
            }
            
            html += `</div>`;
          }
        }
        
        card.innerHTML = html;
        return card;
      });
    }

    // RENDER CARDS
    const projectsRoot = document.getElementById('current-projects-root');
    const fundingRoot = document.getElementById('funding-opportunities-root');
    const ideasRoot = document.getElementById('research-ideas-root');
    
    if (projectsRoot) {
      const projectGrid = document.createElement('div');
      projectGrid.className = 'project-grid';
      
      const projectCards = createCards(cardData.projects, false, true);
      projectCards.forEach(card => projectGrid.appendChild(card));
      
      projectsRoot.innerHTML = '';
      projectsRoot.appendChild(projectGrid);
    }
    
    if (fundingRoot) {
      const fundingGrid = document.createElement('div');
      fundingGrid.className = 'project-grid';
      
      const fundingCards = createCards(cardData.funding, true, true); // Changed to true for hasCollaborators to show interns
      fundingCards.forEach(card => fundingGrid.appendChild(card));
      
      fundingRoot.innerHTML = '';
      fundingRoot.appendChild(fundingGrid);
    }
    
    if (ideasRoot) {
      const ideasGrid = document.createElement('div');
      ideasGrid.className = 'project-grid';
      
      const ideaCards = createCards(cardData.ideas, false, true);
      ideaCards.forEach(card => ideasGrid.appendChild(card));
      
      ideasRoot.innerHTML = '';
      ideasRoot.appendChild(ideasGrid);
    }

    // SETUP CARD CLICK HANDLERS FOR MODAL
    document.addEventListener('click', (event) => {
      const card = event.target.closest('.project-card');
      
      // Skip if clicked element is not in a card or if it's a button or link
      if (!card || event.target.tagName === 'A' || event.target.closest('a')) return;
      
      // Skip if clicked on collaborator avatar (might want to handle differently)
      if (event.target.closest('.collaborator-avatar')) return;
      
      const cardData = card.cardData;
      if (!cardData) return;
      
      const modalImage = modalContainer.querySelector('.modal-image');
      const modalTitle = modalContainer.querySelector('.modal-title');
      const modalDescription = modalContainer.querySelector('.modal-description');
      const modalTags = modalContainer.querySelector('.modal-tags');
      const modalCollaborators = modalContainer.querySelector('.modal-collaborators');
      const modalPreviousInterns = modalContainer.querySelector('.modal-previous-interns');
      
      // Preload image to ensure it's available when the modal opens
      const img = new Image();
      img.onload = function() {
        modalImage.src = cardData.image;
        modalImage.style.display = 'block';
        modalImage.style.maxWidth = '100%';
        modalImage.style.maxHeight = '40vh';
        modalImage.style.width = '';
        modalImage.style.height = '';
        modalImage.style.imageRendering = 'auto';
        modalImage.style.webkitBackfaceVisibility = 'visible';
        modalImage.style.backfaceVisibility = 'visible';
      };
      img.onerror = function() {
        modalImage.src = 'images/DIMSvisualizer.PNG';
        modalImage.style.opacity = '0.6';
        modalImage.style.maxWidth = '100%';
      };
      img.src = cardData.image;
      
      modalTitle.textContent = cardData.title;
      
      // Parse description as markdown
      modalDescription.innerHTML = parseMarkdown(cardData.description);
      
      // Set tags
      modalTags.innerHTML = '';
      if (cardData.tags) {
        cardData.tags.forEach(tag => {
          const tagElem = document.createElement('span');
          tagElem.className = 'tech-tag';
          tagElem.textContent = tag;
          modalTags.appendChild(tagElem);
        });
      }
      
      // Set collaborators (only show if not an internship card or if no previous interns)
      modalCollaborators.innerHTML = '';
      if (cardData.collaborators && cardData.collaborators.length > 0 && 
          (!cardData.isInternship || !cardData.previousInterns || cardData.previousInterns.length === 0)) {
        const collaboratorsTitle = document.createElement('h3');
        collaboratorsTitle.textContent = 'Collaborators';
        modalCollaborators.appendChild(collaboratorsTitle);
        
        const collaboratorsList = document.createElement('div');
        collaboratorsList.className = 'collaborators-list';
        
        // If 1 or 2 collaborators, make the grid one column
        if (cardData.collaborators.length <= 2) {
          collaboratorsList.style.gridTemplateColumns = "1fr";
        }
        
        cardData.collaborators.forEach(collaborator => {
          const collaboratorCard = document.createElement('div');
          collaboratorCard.className = 'collaborator-card';
          collaboratorCard.innerHTML = `
            <div class="collaborator-img">
              <img src="${collaborator.image}" alt="${collaborator.name}" loading="eager"
                   onerror="this.src='images/default-avatar.png'; this.style.opacity='0.6';">
            </div>
            <div class="collaborator-info">
              <h4>${collaborator.name}</h4>
              <div>${parseMarkdown(collaborator.description || collaborator.role)}</div>
              ${collaborator.url ? `<a href="${collaborator.url}" class="profile-link" target="_blank"><i class="fas fa-user profile-icon"></i>Profile</a>` : ''}
            </div>
          `;
          collaboratorsList.appendChild(collaboratorCard);
        });
        
        modalCollaborators.appendChild(collaboratorsList);
      }
      
      // Set previous interns (only show for internship cards)
      modalPreviousInterns.innerHTML = '';
      if (cardData.isInternship && cardData.previousInterns && cardData.previousInterns.length > 0) {
        const internsTitle = document.createElement('h3');
        internsTitle.textContent = 'Previous Interns';
        internsTitle.style.color = '#059669'; // Green color to match the preview
        modalPreviousInterns.appendChild(internsTitle);
        
        const internsList = document.createElement('div');
        internsList.className = 'collaborators-list'; // Reuse the same styling
        
        // If 1 or 2 interns, make the grid one column
        if (cardData.previousInterns.length <= 2) {
          internsList.style.gridTemplateColumns = "1fr";
        }
        
        cardData.previousInterns.forEach(intern => {
          const internCard = document.createElement('div');
          internCard.className = 'collaborator-card'; // Reuse the same styling
          internCard.innerHTML = `
            <div class="collaborator-img">
              <img src="${intern.image}" alt="${intern.name}" loading="eager"
                   onerror="this.src='images/default-avatar.png'; this.style.opacity='0.6';">
            </div>
            <div class="collaborator-info">
              <h4>${intern.name}</h4>
              <div>${parseMarkdown(intern.description || intern.role)}</div>
              ${intern.url ? `<a href="${intern.url}" class="profile-link" target="_blank"><i class="fas fa-user profile-icon"></i>Profile</a>` : ''}
            </div>
          `;
          internsList.appendChild(internCard);
        });
        
        modalPreviousInterns.appendChild(internsList);
      }
      
      // Show modal
      modalContainer.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Set project leads section if available
      const modalProjectLeads = document.querySelector('.modal-project-leads') || 
                               (function() {
                                 const section = document.createElement('div');
                                 section.className = 'modal-project-leads';
                                 modalContainer.querySelector('.modal-text-container').insertBefore(
                                   section, 
                                   modalContainer.querySelector('.modal-collaborators')
                                 );
                                 return section;
                               })();
                               
      modalProjectLeads.innerHTML = '';
      
      if (cardData.projectLeads && cardData.projectLeads.length > 0) {
        const projectLeadsTitle = document.createElement('h3');
        projectLeadsTitle.textContent = 'Project Lead' + (cardData.projectLeads.length > 1 ? 's' : '');
        modalProjectLeads.appendChild(projectLeadsTitle);
        
        const projectLeadsList = document.createElement('div');
        projectLeadsList.className = 'project-leads-list';
        
        cardData.projectLeads.forEach(lead => {
          const leadCard = document.createElement('div');
          leadCard.className = 'project-lead-card';
          
          leadCard.innerHTML = `
            <div class="lead-img">
              <img src="${lead.image}" alt="${lead.name}" loading="eager"
                   onerror="this.src='images/default-avatar.png'; this.style.opacity='1';">
            </div>
            <div class="lead-info">
              <h4>${lead.name}</h4>
              <div>${parseMarkdown(lead.description || lead.role)}</div>
              ${lead.url ? `<a href="${lead.url}" class="profile-link" target="_blank"><i class="fas fa-user profile-icon"></i>Profile</a>` : ''}
            </div>
          `;
          
          projectLeadsList.appendChild(leadCard);
        });
        
        modalProjectLeads.appendChild(projectLeadsList);
      } else {
        modalProjectLeads.style.display = 'none';
      }
    });
  }
});

// Smooth scrolling and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('.quick-nav-button, .to-top-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      let target = this.getAttribute('href');
      if (target === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const targetElement = document.querySelector(target);
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Show/hide "return to top" button based on scroll position
  const returnToTopButton = document.getElementById('return-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      returnToTopButton.style.display = 'block';
    } else {
      returnToTopButton.style.display = 'none';
    }
  });
  
  // Highlight active section in navigation
  const sections = document.querySelectorAll('.content-section');
  const navButtons = document.querySelectorAll('.quick-nav-button');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navButtons.forEach(btn => {
      btn.classList.remove('active-section');
      if (btn.getAttribute('href') === `#${current}`) {
        btn.classList.add('active-section');
      }
    });
  });
});