class Song {
    name;
    nextSong;
    
    constructor(name) {
      this.name = name;
    }
    
    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isInRepeatingPlaylist() {
        let first = this;
        let second = this;

        while(first && second && second.nextSong){
            first = first.nextSong;  
            second = second.nextSong.nextSong;
            if(first === second) return true;
        }
        return false;
    }
}
  
  let first = new Song("Hello");
  let second = new Song("Eye of the tiger");
  
  first.nextSong = second;
  second.nextSong = first;
  
  console.log(first.isInRepeatingPlaylist());