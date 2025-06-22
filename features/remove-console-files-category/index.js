// [better-falix] remove-console-files-category: Script loading
console.log('[better-falix] remove-console-files-category: Script loading');

chrome.storage.sync.get({ enabled: true, removeConsoleFilesCategory: false }, (data) => {
  if (!data.enabled || !data.removeConsoleFilesCategory) {
    console.log('[better-falix] remove-console-files-category: Script disabled');
    return;
  }
  console.log('[better-falix] remove-console-files-category: Script enabled');

  //  --------- START FEATURE ----------

  (function hideConsoleFilesCategory() {
    function run() {
      const btn = document.querySelector('button.nav-category[data-category="CONSOLE & FILES"]');
      if (btn) btn.style.display = 'none';
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  })();

  setTimeout(() => {
    console.log('[better-falix] remove-console-files-category: Script loaded successfully');
  }, 10);
});
