class Solution {
public:
    int lengthOfLastWord(string s) {
        int i=s.size()-1;
        int counter=0;
        while(i>=0){
            if(counter>0 && !isalpha(s[i]))return counter;
            if(isalpha(s[i]))counter++;

            i--;
        }
        return counter;
    }

};