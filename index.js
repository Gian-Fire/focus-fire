document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('openOptions').addEventListener('click', function() {
		chrome.runtime.openOptionsPage();
	});
});

const skipPractice = () => {
	
};