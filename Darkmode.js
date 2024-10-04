<script>
function ToggleMode() {
   if (getItem(DarkMode) == True){
      setItem(DarkMode, False)
   }else: {
      setItem(DarkMode, True)
   }
   var element = document.Body;
   element.classList.toggle("dark-mode");
}
</script>
