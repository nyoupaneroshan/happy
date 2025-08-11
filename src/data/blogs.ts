export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  slug: string;
  image: string;
  category: string;
  tags: string[];
}


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Daily Habits for Healthier Teeth and Gums",
    excerpt: "Discover 5 daily habits to improve oral health and maintain a bright smile. Learn brushing, flossing, and more for healthier teeth and gums (150 chars)",
    slug: "5-daily-habits-for-healthier-teeth-and-gums",
    content: `
      <h1>5 Daily Habits for Healthier Teeth and Gums</h1>

      <p>Maintaining healthy teeth and gums isn't just about a pretty smile—it's crucial for overall wellness. At White Happydent, we believe in proactive care. Follow these five simple yet effective daily habits to protect your oral health.</p>

      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Brushing teeth with a soft-bristled toothbrush" class="w-full h-64 object-cover mb-6 rounded-md">

      <h2>1. Brush Properly, Twice a Day</h2>
      <p>Use a fluoride toothpaste like <strong>White Happydent</strong> and a soft-bristled toothbrush. Hold the brush at a 45-degree angle and use gentle, circular motions. Brush for at least two minutes—morning and night—for best results.</p>

      <h2>2. Don't Skip Flossing</h2>
      <p>Floss daily to clean areas between your teeth that brushing can’t reach. It helps remove plaque and prevents gum disease and cavities. Floss before bedtime for maximum effectiveness.</p>

      <img src="https://images.pexels.com/photos/4067977/pexels-photo-4067977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Flossing teeth for oral hygiene" class="w-full h-64 object-cover mb-6 rounded-md">

      <h2>3. Use an Antibacterial Mouthwash</h2>
      <p>Rinsing with mouthwash reduces plaque and bacteria, helping to prevent gingivitis and bad breath. Choose an alcohol-free formula for gentler daily use.</p>

      <h2>4. Stay Hydrated</h2>
      <p>Drinking water throughout the day helps rinse away food particles, reduces acidity, and stimulates saliva production, which naturally protects your teeth.</p>

      <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Glass of water promoting oral hydration" class="w-full h-64 object-cover mb-6 rounded-md">

      <h2>5. Eat Mindfully</h2>
      <p>Limit sugary snacks and acidic beverages. If you do indulge, rinse with water and wait 30 minutes before brushing to avoid damaging softened enamel.</p>

      <p>Healthy teeth begin with daily care. Visit our <a href="/products">Products</a> page to explore White Happydent toothpaste and other oral care solutions. For more tips, explore the rest of our <a href="/blog">blog articles</a> or get in touch via our <a href="/contact">contact page</a>.</p>

    `,
    author: "Admin",
    date: "March 15, 2025",
    image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Oral Health",
    tags: ["dental care", "oral hygiene", "healthy habits"]
  },
  {
    id: 2,
    title: "Understanding Tooth Sensitivity: Causes and Solutions",
    excerpt: "Learn the causes of tooth sensitivity and effective solutions to manage this common issue. Explore treatments for sensitive teeth (145 chars)",
    slug: "understanding-tooth-sensitivity-causes-and-solutions",
    content: `
     <h1>Understanding Tooth Sensitivity: Causes and Solutions</h1>

<p>Sharp pain from hot or cold drinks? You might have tooth sensitivity—a common condition caused by worn enamel or exposed roots. Let’s explore the causes and how to manage it effectively.</p>

<h2>Common Causes of Tooth Sensitivity</h2>
<ul>
  <li><strong>Enamel erosion:</strong> From acidic foods or brushing too hard</li>
  <li><strong>Gum recession:</strong> Exposes tooth roots</li>
  <li><strong>Bruxism:</strong> Grinding your teeth wears them down</li>
  <li><strong>Dental procedures:</strong> Recent fillings or whitening treatments</li>
  <li><strong>Tooth decay or cracks:</strong> Allow nerves to become exposed</li>
</ul>

<h2>Solutions for Sensitive Teeth</h2>

<h3>Immediate Relief</h3>
<ul>
  <li>Use desensitizing toothpaste with potassium nitrate</li>
  <li>Switch to a soft-bristled toothbrush and brush gently</li>
  <li>Avoid extreme temperatures in foods and drinks</li>
</ul>

<img src="https://images.pexels.com/photos/207513/pexels-photo-207513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Using desensitizing toothpaste for relief" class="w-full h-64 object-cover mb-6 rounded-md">

<h3>Long-Term Dental Care</h3>
<ul>
  <li><strong>Fluoride treatments:</strong> Strengthen enamel</li>
  <li><strong>Dental bonding:</strong> Protect exposed root surfaces</li>
  <li><strong>Gum grafts:</strong> Restore receding gums</li>
  <li><strong>Night guards:</strong> Prevent grinding damage</li>
</ul>

<h3>Prevention Tips</h3>
<ul>
  <li>Brush with the right technique and avoid overbrushing</li>
  <li>Limit acidic foods and rinse with water after eating</li>
  <li>Use a straw for citrus or soda</li>
  <li>Wait 30 minutes to brush after eating acidic foods</li>
</ul>

<p>If sensitivity persists, consult your dentist. For additional advice or to explore our protective toothpaste range, visit our <a href="/products">Products</a> page or <a href="/contact">contact us</a>.</p>
    `,
    author: "Admin",
    date: "February 28, 2025",
    image: "https://images.pexels.com/photos/3845545/pexels-photo-3845545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Dental Problems",
    tags: ["sensitive teeth", "tooth pain", "dental treatment"]
  },
  {
    id: 3,
    title: "The Connection Between Oral Health and Overall Wellness",
    excerpt: "Explore how oral health impacts overall wellness. Learn the link to heart disease, diabetes, and more for better health (140 chars)",
    slug: "the-connection-between-oral-health-and-overall-wellness",
    content: `
      <h1>The Connection Between Oral Health and Overall Wellness</h1>

<p>Oral health is more than just keeping your teeth clean—it plays a key role in your entire body’s well-being. Here’s how maintaining a healthy mouth supports heart health, immunity, and more.</p>

<h2>How Oral Health Affects the Body</h2>
<p>Gum disease and untreated dental issues introduce harmful bacteria into the bloodstream, which can trigger inflammation and increase the risk of various chronic illnesses.</p>

<h2>Linked Health Conditions</h2>

<h3>Heart Disease</h3>
<p>Bacteria from gum disease can inflame blood vessels and increase the risk of heart attacks and strokes.</p>

<img src="https://images.pexels.com/photos/5206928/pexels-photo-5206928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Heart health and oral care link" class="w-full h-64 object-cover mb-6 rounded-md">

<h3>Diabetes</h3>
<p>Poor oral health makes it harder to control blood sugar, while diabetes can worsen gum infections.</p>

<h3>Respiratory Infections</h3>
<p>Bacteria from the mouth can be inhaled into the lungs, causing infections like pneumonia—especially in the elderly.</p>

<h3>Pregnancy Risks</h3>
<p>Gum disease is associated with premature births and low birth weights. Oral health is essential during pregnancy.</p>

<h3>Rheumatoid Arthritis</h3>
<p>Chronic gum inflammation can worsen symptoms of autoimmune diseases like arthritis.</p>

<h2>How to Protect Your Overall Health</h2>
<ul>
  <li><strong>Brush twice daily</strong> with fluoride toothpaste like White Happydent</li>
  <li><strong>Floss daily</strong> to prevent plaque build-up</li>
  <li><strong>Eat a balanced diet</strong> rich in vegetables and low in sugars</li>
  <li><strong>Quit tobacco</strong> to lower disease risks</li>
  <li><strong>Visit your dentist</strong> for routine cleanings and exams</li>
</ul>

<p>Your mouth is a mirror of your body. For more insights, explore our <a href="/blog">blog</a> or check out our <a href="/products">oral care products</a> that promote complete health. Have questions? <a href="/contact">Reach out to us</a> today!</p>
    `,
    author: "Admin",
    date: "January 12, 2025",
    image: "https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x",
    category: "Wellness",
    tags: ["overall health", "oral-systemic connection", "preventive care"]
  },
  {
    id: 4,
    title: "What to Expect During Your First Week with Braces: A Survival Guide",
    excerpt: "Getting braces? Our survival guide covers everything to expect during your first week, from initial discomfort to eating tips, ensuring a smoother transition.",
    slug: "what-to-expect-first-week-with-braces",
    content: `
      <h1>What to Expect During Your First Week with Braces: A Survival Guide</h1>

      <p>Congratulations on starting your journey to a straighter smile! The first week with braces is a unique experience—a mix of excitement and adjustment. At White Happydent, we want to help you navigate it smoothly. Here’s a day-by-day guide on what to expect and how to manage it.</p>

      <img src="https://media.istockphoto.com/id/1388265956/photo/smiling-mouth-with-dental-aligner.jpg?s=612x612&w=0&k=20&c=eR9Decn4nQ0n23Px1iPeNE7Wm2HBqF_J8dvhovi67CA=" alt="Teenager with new braces smiling confidently" class="w-full h-64 object-cover mb-6 rounded-md">

      <h2>Day 1: The Big Day and Initial Tightness</h2>
      <p>Getting your braces on is painless. Your orthodontist will bond the brackets to your teeth and connect them with an archwire. It won't hurt, but it will feel strange. The main sensation is one of pressure or tightness. Your mouth will also need to get used to the new hardware, and you might feel like your lips are puffing out. This is all completely normal.</p>

      <h2>Days 2-4: Managing Soreness and Irritation</h2>
      <p>This is typically the most uncomfortable period. Your teeth may feel sore and tender, especially when you bite down, as they begin to shift. Your cheeks, lips, and tongue may also get irritated from rubbing against the new brackets. </p>

      <p><strong>Survival Tips:</strong></p>
      <ul>
        <li>Stick to soft foods (more on this below).</li>
        <li>Use orthodontic wax (your orthodontist will provide this) to cover any brackets that are causing sores.</li>
        <li>Rinse with warm salt water to soothe irritation.</li>
        <li>An over-the-counter pain reliever can help, but consult with your doctor first.</li>
      </ul>

      <img src="https://foodsniff.com/wp-content/uploads/2025/03/soft-food-recipes-high-protein-bariatric-meal.webp" alt="A variety of soft foods like soup, smoothies, and yogurt" class="w-full h-64 object-cover mb-6 rounded-md">
      
      <h2>Mastering Your New Menu: What to Eat</h2>
      <p>Chewing will be a challenge, so stock up on soft foods before your appointment. Think smoothies, yogurt, soup, mashed potatoes, oatmeal, scrambled eggs, and soft-cooked pasta. Avoid anything hard (nuts, ice, hard candy), sticky (caramel, gummy candy), or chewy (hard bread crusts, bagels).</p>

      <h2>Days 5-7: Turning a Corner with a New Cleaning Routine</h2>
      <p>By the end of the week, the soreness should significantly decrease. You’ll become more accustomed to the feeling of the braces. Now is the time to perfect your new oral hygiene routine. Food gets trapped easily, so you must be diligent.</p>
      
      <p>Use a soft-bristled brush with a fluoride toothpaste like <strong>White Happydent</strong> to clean around each bracket. Floss threaders or interdental brushes are essential tools to clean between teeth and under the wire. It takes more time, but it’s crucial for preventing cavities and stains.</p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmgkzgJRv8VRf1BDNsLzINsGL0VAPnQvCQw&s" alt="Orthodontic care kit with floss threaders and interdental brushes" class="w-full h-64 object-cover mb-6 rounded-md">

      <p>The first week is the biggest hurdle, but it gets much easier from here. You've got this! For a toothpaste that's gentle but effective for brace-wearers, check out our <a href="/products">Products</a> page. For more tips, keep an eye on our <a href="/blog">blog</a>, or reach out to us directly via our <a href="/contact">contact page</a>.</p>
    `,
    author: "Admin",
    date: "August 11, 2025",
    image: "https://images.pexels.com/photos/4269941/pexels-photo-4269941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Orthodontics",
    tags: ["first week with braces", "braces pain", "what to eat with braces", "orthodontic care"]
  }
];