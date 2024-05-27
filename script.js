function expandBtn1(id) {
  var contentId = "no" + id;
  var content = document.getElementById(contentId);
  var originalValue;
  var fraction = document.querySelector(".frac1")
  var head = document.querySelector(".head1");
  var para1 = document.querySelector(".p1_3");
  var para2 = document.querySelector(".p1_4")
  // Toggle classes for expanding/collapsing
  if (content.classList.contains("btn1")) {
      originalValue = content.innerText.replace(/\D/g, ''); // Extracting only digits
      content.classList.remove("btn1");
      content.classList.add("expanded1");
      content.innerHTML = "Week " + id;
    fraction.innerHTML= id+"/6"
  }
  if (contentId=="no1"){
    head.innerHTML = `Week ${id} : Introduction to AI and Sustainability`;
    para1.innerHTML=`Understand intersection of AI and sustainability with ethical considerations in AI development.`
    para2.innerHTML=`Case studies: AI applications in environmental conservation, climate modelling, resource optimization.`
   }
  else if(contentId=="no2"){
    head.innerHTML = `Week ${id} : Sustainable AI algorithms`;
    para1.innerHTML="Machine learning basics: <br> Sustainable algorithm design <br> Bias mitigation <br> Fairness-aware models"
    para2.innerHTML=`Practical Exercises: Implementing ethical AI `
   }
   else if(contentId=="no3"){
    head.innerHTML = `Week ${id} : Renewal Energy and AI`;
    para1.innerHTML="AI for renewable energy: <br>Solar power prediction <br>Wind energy optimization <br>Smart grid management using AI <br>Guest speakers from the renewable energy industry"
    para2.innerHTML=``
   }
   else if(contentId=="no4"){
    head.innerHTML = `Week ${id} : Circular Economy and AI `;
    para1.innerHTML= "Circular economy principles: <br>AI-driven waste reduction and recycling <br>Supply chain optimization with AI"
    para2.innerHTML= `Case study: Sustainable product design using AI `
   }
   else if(contentId=="no5"){
    head.innerHTML = `Week ${id} : Biodiversity Conservation `;
    para1.innerHTML= "AI applications in biodiversity monitoring <br>Species identification using computer vision </br>Predictive modelling for habitat preservation"
    para2.innerHTML= ``
   }
   else{
    head.innerHTML = `Week ${id} : PROJECT`;
    para1.innerHTML= "Participants work in teams to propose and develop an AI-based sustainability solution."
    para2.innerHTML= `Topics may include climate resilience, water management, or wildlife protection.`
   }
   
  // Collapse other expanded content
  var allContent = document.querySelectorAll(".expanded1");
  allContent.forEach(function (item) {
      if (item.id !== contentId) {
          item.classList.remove("expanded1");
          item.classList.add("btn1");
          item.innerHTML = item.innerText.replace(/\D/g, ''); // Extracting only digits
      }
  });
}

function expandBtn2(id) {
  var contentId = "no" + id;
  var content = document.getElementById(contentId);
  var originalValue;
  var fraction = document.querySelector(".frac2")
  var head = document.querySelector(".head2");
  var para1 = document.querySelector(".p2_3");
  var para2 = document.querySelector(".p2_4")
  // Toggle classes for expanding/collapsing
  if (content.classList.contains("btn2")) {
      originalValue = content.innerText.replace(/\D/g, ''); // Extracting only digits
      content.classList.remove("btn2");
      content.classList.add("expanded2");
      content.innerHTML = "Week " + (id-6);
      fraction.innerHTML= (id - 6)+"/6"
  }
  if (contentId=="no7"){
    head.innerHTML = `Week ${id-6} : Introduction to AI & Digital Media Design`;
    para1.innerHTML=`Explore application of digital media technology in AI and its impact on various aspects of life.`
    para2.innerHTML=`Learn transformation of visual art  including creative reconstruction and production of new media art materials.`
   }
  else if(contentId=="no8"){
    head.innerHTML = `Week ${id-6} : AI Digital Graphics`;
    para1.innerHTML="Explore the impact of artificial intelligence on graphic design."
    para2.innerHTML=`To learn about the use of AI in graphic design, including how it can help designers enhance their creative quality and streamline their workflow.`
   }
   else if(contentId=="no9"){
    head.innerHTML = `Week ${id-6} : AI Digital Photography`;
    para1.innerHTML="Explore the impact of artificial intelligence on digital photography. To learn about the use of AI in photography, including how it can enhance their creative quality and streamline their workflow."
    para2.innerHTML=``
   }
   else if(contentId=="no10"){
    head.innerHTML = `Week ${id-6} : AI Digital Audio`;
    para1.innerHTML= "Gain understanding of how AI is  impacting future of audio and how it shape the industry."
    para2.innerHTML= `To learn generative AI in audio, including creating new music samples from scratch in a variety of genres and artist styles.`
   }
   else if(contentId=="no11"){
    head.innerHTML = `Week ${id-6} : AI Digital Video`;
    para1.innerHTML= "To assist or automate various aspects of video creation, such as scripting, filming, editing, and enhancing. To generate realistic and diverse video content from simple text or audio prompts, or by enhancing existing video content with AI tools."
    para2.innerHTML= ``
   }
   else{
    head.innerHTML = `Week ${id-6} : PROJECT`;
    para1.innerHTML= "Participants work in teams to propose and develop digital media content using generative AI technique."
    para2.innerHTML= ``
   }
  // Collapse other expanded content
  var allContent = document.querySelectorAll(".expanded2");
  allContent.forEach(function (item) {
      if (item.id !== contentId) {
          item.classList.remove("expanded2");
          item.classList.add("btn2");
          item.innerHTML = item.innerText.replace(/\D/g, ''); // Extracting only digits
      }
  });
}
function expandBtn3(id) {
  var contentId = "no" + id;
  var content = document.getElementById(contentId);
  var originalValue;
  var fraction = document.querySelector(".frac3")
  var head = document.querySelector(".head3");
  var para1 = document.querySelector(".p3_3");
  var para2 = document.querySelector(".p3_4")
  // Toggle classes for expanding/collapsing
  if (content.classList.contains("btn3")) {
      originalValue = content.innerText.replace(/\D/g, ''); // Extracting only digits
      content.classList.remove("btn3");
      content.classList.add("expanded3");
      content.innerHTML = "Week " + (id-12);
      fraction.innerHTML= (id - 12)+"/4"
  }
  if (contentId=="no13"){
    head.innerHTML = `Week ${id-12} : Introduction to AI and Business`;
    para1.innerHTML=`Understand the fundamental concepts of AI, including machine learning and big data.`
    para2.innerHTML=`Explore real-world examples of successful AI adoption across industries. Lay the groundwork for the subsequent modules.`
   }
  else if(contentId=="no14"){
    head.innerHTML = `Week ${id-12} : Machine Learning Techniques for AI`;
    para1.innerHTML="Dive deeper into machine learning methodologies:<br> Supervised learning: Predictive modeling with labeled data. <br>Unsupervised learning: Clustering and pattern discovery. <br>Reinforcement learning: Decision-making in dynamic environments."
    para2.innerHTML="Hands-on exercises to apply machine learning algorithms."
   }
   else if(contentId=="no15"){
    head.innerHTML = `Week ${id-12} : Real-Time Financial Analysis with AI`;
    para1.innerHTML="Leverage AI for financial data analysis: <br>Predictive modeling for stock prices. <br>Sentiment analysis of market news. <br>Real-time insights for investment decisions."
    para2.innerHTML=`Case studies from the finance industry.`
   }
   else{
    head.innerHTML = `Week ${id-12} : Ethics, Risks, and AI Governance`;
    para1.innerHTML= "Navigate the ethical landscape of AI: <br>Bias mitigation. <br>Transparency and accountability. <br>Identify risks and challenges in AI adoption. <br>Design governance frameworks to ensure responsible AI use."
    para2.innerHTML= ``
   }
  // Collapse other expanded content
  var allContent = document.querySelectorAll(".expanded3");
  allContent.forEach(function (item) {
      if (item.id !== contentId) {
          item.classList.remove("expanded3");
          item.classList.add("btn3");
          item.innerHTML = item.innerText.replace(/\D/g, ''); // Extracting only digits
      }
  });
}
