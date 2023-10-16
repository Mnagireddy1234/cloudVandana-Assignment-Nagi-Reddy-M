Java Assignment
Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
Solution:	

package arrays;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class ArrayShuffling {
	public static void main(String[] args) {
		int a[]= {1,2,3,4,5,6,7};
		int n=a.length;
		Random r=new Random();
		for(int i=n-1;i>0;i--) {
			int j=r.nextInt(i+1);
			int temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
		System.out.println(Arrays.toString(a));
		System.out.println("By using Collection Shuffle Method");
		
		//By using Collection Shuffle Method
		
		List<Integer> arr=new ArrayList<>();
		for(int i=1;i<=6;i++) {
			arr.add(i);
		}
		System.out.println("Initial array:"+arr);
		Collections.shuffle(arr); 
		System.out.println("After shuffling:"+arr);
	}

}
