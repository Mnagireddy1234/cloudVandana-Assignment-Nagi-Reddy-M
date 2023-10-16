package arrays;

public class Panagram {
	public static void letter(String s) {
		s=s.toLowerCase();
		boolean letterPresent=true;
		for(char ch='a';ch<='z';ch++) {
			if(!s.contains(String.valueOf(ch))) {
				letterPresent=false;
				break;
			}
		}
		if(letterPresent) {
			System.out.println("panagram");
		}
		else {
			System.out.println("not panagram");
		}
	}
		public static void main(String[] args) {
			String s="Pack my box with five dozen liquor jugs123";
			letter(s);
			
	}
}


