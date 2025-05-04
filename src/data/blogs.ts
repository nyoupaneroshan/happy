export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Daily Habits for Healthier Teeth and Gums",
    excerpt: "Discover simple yet effective daily routines that can significantly improve your oral health and keep your smile bright.",
    content: `
      # 5 Daily Habits for Healthier Teeth and Gums

      Maintaining good oral hygiene is essential for a healthy smile and overall well-being. Here are five daily habits that can help keep your teeth and gums in top condition:

      ## 1. Brush Properly, Twice a Day

      Brushing your teeth twice a day is fundamental, but how you brush matters just as much as how often. Use a soft-bristled toothbrush and fluoride toothpaste. Hold your brush at a 45-degree angle to your gums and use gentle, circular motions. Be sure to brush for at least two minutes, covering all surfaces of your teeth.

      ## 2. Don't Skip Flossing

      Flossing removes food particles and plaque from areas your toothbrush can't reach, such as between teeth and under the gumline. Make flossing a daily habit, ideally before bedtime, to prevent gum disease and cavities.

      ## 3. Rinse with an Antibacterial Mouthwash

      Adding a therapeutic mouthwash to your routine can help reduce plaque, prevent gingivitis, and freshen your breath. Look for products with the ADA Seal of Acceptance for best results.

      ## 4. Stay Hydrated

      Drinking plenty of water throughout the day helps wash away food particles and bacteria. Water also dilutes acids produced by bacteria in your mouth and stimulates saliva production, which naturally protects your teeth.

      ## 5. Mindful Eating for Dental Health

      Limit sugary snacks and acidic beverages, which can erode enamel and lead to cavities. If you do indulge, rinse your mouth with water afterward and wait at least 30 minutes before brushing to avoid damaging enamel that's been softened by acids.

      By incorporating these five habits into your daily routine, you'll be taking significant steps toward maintaining healthy teeth and gums for life.
    `,
    author: "Dr. Sarah Johnson",
    date: "March 15, 2025",
    image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Oral Health",
    tags: ["dental care", "oral hygiene", "healthy habits"]
  },
  {
    id: 2,
    title: "Understanding Tooth Sensitivity: Causes and Solutions",
    excerpt: "Learn what causes sensitive teeth and discover effective ways to manage and treat this common dental condition.",
    content: `
      # Understanding Tooth Sensitivity: Causes and Solutions

      That sharp, sudden pain when you eat something hot, cold, sweet, or acidic is a telltale sign of tooth sensitivity. This common dental issue affects millions of people, but with proper understanding and care, it can be managed effectively.

      ## What Causes Tooth Sensitivity?

      Tooth sensitivity occurs when the protective layers of your teeth—enamel on the crown and cementum on the root—wear down, exposing the underlying dentin. Dentin contains microscopic tubules filled with nerve endings that connect to the tooth's pulp. When these tubules are exposed, stimuli like temperature extremes, acidic or sweet foods, and even cold air can trigger pain.

      Common causes include:

      - **Enamel erosion** from acidic foods and beverages
      - **Aggressive brushing** that wears down enamel
      - **Gum recession** that exposes tooth roots
      - **Teeth grinding** (bruxism)
      - **Recent dental procedures** like whitening, fillings, or crowns
      - **Cracked teeth or fillings** that expose dentin
      - **Gum disease** causing tissue inflammation and recession

      ## Effective Solutions for Sensitive Teeth

      ### Immediate Relief

      - **Desensitizing toothpaste** containing ingredients like potassium nitrate or stannous fluoride can block pain signals from the nerve.
      - **Soft-bristled toothbrush** with gentle brushing technique.
      - **Avoiding trigger foods and beverages** that cause discomfort.

      ### Long-term Management

      - **Fluoride treatments** to strengthen enamel and reduce sensitivity.
      - **Dental bonding or sealants** to cover exposed root surfaces.
      - **Gum grafts** for severe gum recession.
      - **Night guards** for those who grind their teeth.
      - **Root canal** for severe, persistent sensitivity that doesn't respond to other treatments.

      ### Preventive Measures

      - **Proper brushing technique** using a soft-bristled toothbrush and gentle, circular motions.
      - **Regular dental check-ups** to catch issues early.
      - **Limiting acidic foods and drinks** and rinsing with water afterward.
      - **Using a straw** for acidic beverages to minimize contact with teeth.
      - **Waiting 30 minutes after consuming acidic foods** before brushing.

      If you're experiencing tooth sensitivity, it's important to consult with your dentist to determine the underlying cause and the most appropriate treatment plan for your specific situation.
    `,
    author: "Dr. Michael Chen",
    date: "February 28, 2025",
    image: "https://images.pexels.com/photos/3845545/pexels-photo-3845545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Dental Problems",
    tags: ["sensitive teeth", "tooth pain", "dental treatment"]
  },
  {
    id: 3,
    title: "The Connection Between Oral Health and Overall Wellness",
    excerpt: "Explore the surprising ways your dental health impacts your entire body and learn why a healthy mouth is essential for overall wellness.",
    content: `
      # The Connection Between Oral Health and Overall Wellness

      Your mouth is the gateway to your body, and the state of your oral health can offer clues about your overall health. Beyond just preventing bad breath, cavities, and gum disease, maintaining good oral hygiene may help protect you from more serious health conditions.

      ## The Mouth-Body Connection

      The same bacteria that cause gum inflammation and disease can enter your bloodstream through infected gums. Once these bacteria are circulating throughout your body, they can potentially contribute to or exacerbate various health issues.

      ## Oral Health and Chronic Conditions

      Research has shown connections between oral health and several serious conditions:

      ### Heart Disease and Stroke

      Studies have found that people with gum disease are more likely to have heart disease and are at higher risk for strokes. The inflammation caused by periodontal disease may play a role in clogging arteries and forming blood clots.

      ### Diabetes

      There's a two-way relationship between diabetes and periodontal disease. People with diabetes are more susceptible to gum disease, while severe gum disease can potentially impact blood glucose control, making diabetes more difficult to manage.

      ### Respiratory Infections

      Bacteria from the mouth can be aspirated into the lungs, potentially causing or worsening respiratory conditions like pneumonia, particularly in vulnerable individuals.

      ### Pregnancy Complications

      Research suggests a link between gum disease in pregnant women and complications such as premature birth and low birth weight.

      ### Rheumatoid Arthritis

      The inflammation associated with periodontal disease may worsen inflammation throughout the body, including in the joints of people with rheumatoid arthritis.

      ## Protecting Your Oral and Overall Health

      Taking care of your mouth is a crucial part of caring for your entire body. Here's how to maintain optimal oral health:

      - **Brush twice daily** with fluoride toothpaste
      - **Floss daily** to remove plaque between teeth
      - **Visit your dentist regularly** for cleanings and check-ups
      - **Eat a balanced diet** low in sugary foods and drinks
      - **Don't smoke or use tobacco products**
      - **Manage chronic conditions** like diabetes

      By prioritizing your oral health, you're making an investment in your overall wellness and potentially reducing your risk for various chronic conditions. Remember, a healthy mouth contributes to a healthy body!
    `,
    author: "Dr. Lisa Williams",
    date: "January 12, 2025",
    image: "https://images.pexels.com/photos/7296511/pexels-photo-7296511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Wellness",
    tags: ["overall health", "oral-systemic connection", "preventive care"]
  }
];