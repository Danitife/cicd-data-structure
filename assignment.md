## 🎵 Practice Task: 
The Live DJ Music Playlist📋 ScenarioImagine you are building the backend software for a live DJ. The DJ needs to manage a list of songs dynamically during a mega party. Because songs are constantly added, skipped, or played in a specific sequence, a linked list is the perfect data structure to manage this efficiently without shifting array indices.

## 🛠️ Student Instructions:
Using the Node and SingleLinkedList classes taught in class today, write a script to simulate a live DJ set by performing the following operations in order:
- Create the Playlist: 
    Initialize a new instance of your SingleLinkedList.
- Add Regular Tracks: 
    Use push to add three songs to the end of the playlist: "Song A", "Song B", and "Song C".
- Handle a VIP Request: 
    A VIP guest pays to skip the line! Use unshift to add "VIP Hit Song" to the very beginning of the playlist.Play the First Song: The DJ starts the party. 
- Use shift to remove and play the first song in line. 
- Print the name of the song that is currently playing.
- Remove the Last Song: 
    The DJ decides the very last song in the queue is too slow for the party mood. Use pop to remove it from the playlist.
- Check the Status: 
    Print the current length of the playlist to verify how many songs are left.💻 

## Expected Output:

If implemented correctly, your students' console logs should display:text🎧 Now playing: VIP Hit Song
🗑️ Removed from end: Song C
🎶 Songs remaining in playlist: 2