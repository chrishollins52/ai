// Function to show a toast notification
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Function to handle the AI question form
document.getElementById('main-ask-guru-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const questionInput = document.getElementById('main-ai-question');
  const responseContainer = document.getElementById('main-ai-response-container');
  const responseText = document.getElementById('main-ai-response');
  const loadingIndicator = document.getElementById('main-ai-loading-indicator');

  const question = questionInput.value.trim();
  if (question === '') {
    showToast('Please ask a question first!');
    return;
  }

  // Hide previous response and show loading indicator
  responseContainer.classList.add('hidden');
  loadingIndicator.classList.remove('hidden');

  // Simulated AI responses for demonstration
  const aiResponses = [
    "To achieve a flawless crown, focus your brushing on a single point and brush outwards in a circular motion. This trains the hair to lay down in a neat, spinning pattern.",
    "Eliminating forks requires brushing from multiple angles and consistently. Identify the point where your waves separate and make sure you're brushing through that spot at least 50 times in each session.",
    "For more shine, moisturize your hair daily with a lightweight pomade or oil. Brushing with a soft brush as a finisher also helps distribute natural oils and create a glossy finish.",
    "To fix frizzy waves, you must maintain consistent compression. Wear your durag tightly and correctly, even when just lounging at home. A moisturized scalp and regular brushing with a soft brush can also help.",
    "Wolfing is the process of growing your hair out for a longer period (usually 4-12 weeks) without cutting it. This allows your waves to get deeper and more defined, but requires diligent brushing."
  ];

  // Simulate a delay for the AI to "think"
  setTimeout(() => {
    // Select a random response from the array
    const randomIndex = Math.floor(Math.random() * aiResponses.length);
    const answer = aiResponses[randomIndex];

    // Hide loading indicator and display the new response
    loadingIndicator.classList.add('hidden');
    responseText.textContent = answer;
    responseContainer.classList.remove('hidden');
    questionInput.value = ''; // Clear the input field
  }, 2000); // 2-second delay
});


// Function for the wave routine form
document.getElementById('wave-routine-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const stage = document.getElementById('wave-stage').value;
  const hairType = document.getElementById('hair-type').value;
  const waveGoal = document.getElementById('wave-goal').value;
  const desiredPattern = document.getElementById('desired-pattern').value;

  const routineResponseDiv = document.getElementById('routine-response');
  const routineContainer = document.getElementById('routine-response-container');
  const routineLoading = document.getElementById('routine-loading-indicator');
  
  routineContainer.classList.add('hidden');
  routineLoading.classList.remove('hidden');

  const routines = {
    'Beginner-Coarse/Thick': `**Routine for Beginners with Coarse Hair:** Brush for 30 minutes a day with a **Hard Bristle Brush**. Use a moisturizing pomade and wear a durag at night.`,
    'Beginner-Medium': `**Routine for Beginners with Medium Hair:** Brush for 20 minutes a day with a **Medium Bristle Brush**. Apply a leave-in conditioner and always wear a durag at night.`,
    'Beginner-Fine/Soft': `**Routine for Beginners with Fine Hair:** Brush for 15 minutes a day with a **Soft Bristle Brush**. Use a light oil to prevent breakage and wear a durag at night.`,
    'Advanced-Deeper Waves': `**Advanced Routine for Deeper Waves:** It's time to start wolfing! Brush for 45 minutes a day with a **Hard Bristle Brush**. You may want to try our new **Whip Shampoo** to keep your scalp clean during longer wolfing sessions.`,
    'Intermediate-Forks': `**Intermediate Routine to Fix Forks:** Focus on your problem areas. Isolate the forks and brush them at multiple angles with a **Medium Bristle Brush**. Do extra brush sessions on those spots.`,
    'Advanced-Shine': `**Advanced Routine for More Shine:** Finish every brush session with a **Soft Bristle Brush**. Apply a few drops of our natural oil blend (coming soon!) and lay down with a silky durag for maximum gloss.`
  };

  const routineKey = `${stage}-${waveGoal}`; // Simplified key for demonstration
  const routine = routines[routineKey] || routines['Beginner-Medium']; // Fallback routine

  setTimeout(() => {
    routineLoading.classList.add('hidden');
    routineResponseDiv.innerHTML = `<h3 class="text-xl font-bold text-center mb-4">Your Custom Routine:</h3>` + `<div class="p-4 bg-gray-800 rounded-lg">${routine}</div>`;
    routineContainer.classList.remove('hidden');
  }, 2000);
});


// Function to handle community tips
document.getElementById('wave-tip-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = document.getElementById('community-name');
  const tipInput = document.getElementById('wave-content');
  const tipsDisplay = document.getElementById('community-tips-display');
  const noTipsMessage = document.getElementById('no-tips-message');

  const name = nameInput.value.trim();
  const tip = tipInput.value.trim();

  if (name === '' || tip === '') {
    showToast('Please fill out both fields!');
    return;
  }

  // Create new tip element
  const newTip = document.createElement('div');
  newTip.classList.add('p-6', 'rounded-lg', 'bg-gray-800', 'shadow-lg');
  newTip.innerHTML = `<p class="font-bold text-cyan-400 mb-2">${name}:</p><p class="text-gray-200">${tip}</p>`;

  // Add tip to the display and show message if needed
  tipsDisplay.prepend(newTip);
  noTipsMessage.classList.add('hidden');

  // Clear form inputs
  nameInput.value = '';
  tipInput.value = '';

  showToast('Your wisdom has been shared!');
});

// Simple Modal Logic (for Waver Hall of Fame)
function showWaverDetails(waverId) {
    const waverData = {
        1: { name: 'Waver 1', team: 'Team: Elite Waves', origin: 'Origin: Miami, FL' },
        2: { name: 'Waver 2', team: 'Team: The Wave Gods', origin: 'Origin: Los Angeles, CA' },
        3: { name: 'Waver 3', team: 'Team: Crown Control', origin: 'Origin: New York, NY' },
        4: { name: 'Waver 4', team: 'Team: The Gauntlet', origin: 'Origin: Chicago, IL' },
        5: { name: 'Waver 5', team: 'Team: Wave Chasers', origin: 'Origin: London, UK' },
        6: { name: 'Waver 6', team: 'Team: Master Combers', origin: 'Origin: Atlanta, GA' },
        7: { name: 'Waver 7', team: 'Team: Spiral Kings', origin: 'Origin: Houston, TX' },
        8: { name: 'Waver 8', team: 'Team: The Unravelers', origin: 'Origin: Paris, FR' },
        9: { name: 'Waver 9', team: 'Team: Deep Tides', origin: 'Origin: Toronto, CAN' },
        10: { name: 'Waver 10', team: 'Team: The Monarchs', origin: 'Origin: Berlin, DE' }
    };

    const waver = waverData[waverId];
    document.getElementById('waverName').textContent = waver.name;
    document.getElementById('waverTeam').textContent = waver.team;
    document.getElementById('waverOrigin').textContent = waver.origin;
    document.getElementById('waverModal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Purchase function for products
function purchaseBrush(productName) {
    showToast(`${productName} added to your cart!`);
}

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
