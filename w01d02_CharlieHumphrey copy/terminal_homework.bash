# Part I: Set the Scene
# Create a new directory on your Desktop called galaxy_far_far_away 
Charlies-MacBook-Pro:~ charliehumphrey$ cd Desktop
Charlies-MacBook-Pro:Desktop charliehumphrey$ mkdir galaxy_far_far_away
#Create a directory called death_star, and make the following files inside of it:
Charlies-MacBook-Pro:Desktop charliehumphrey$ cd galaxy_far_far_away/
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ mkdir death_star
#darth_vader.txt
#princess_leia.txt
#storm_trooper.txt
Charlies-MacBook-Pro:death_star charliehumphrey$ touch darth_vader.txt
Charlies-MacBook-Pro:death_star charliehumphrey$ touch princess_leia.txt
Charlies-MacBook-Pro:death_star charliehumphrey$ touch storm_trooper.txt
#In galaxy_far_far_away, make a directory named tatooine and create the following files in it:
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ mkdir tatooine
#luke.txt
#ben_kenobi.txt
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ cd tatooine/
Charlies-MacBook-Pro:tatooine charliehumphrey$ touch luke.txt
Charlies-MacBook-Pro:tatooine charliehumphrey$ touch ben_kenobi.txt
#Inside of tatooine make a directory called millenium_falcon, and in it create:
Charlies-MacBook-Pro:tatooine charliehumphrey$ mkdir millenium_falcon
#Inside of tatooine make a directory called millenium_falcon, and in it create:
Charlies-MacBook-Pro:tatooine charliehumphrey$ cd millenium_falcon/
#han_solo.txt
#chewbaca.txt
Charlies-MacBook-Pro:millenium_falcon charliehumphrey$ touch han.txt
Charlies-MacBook-Pro:millenium_falcon charliehumphrey$ touch chewie.txt

#Part II: mv - rename
#Rename ben_kenobi.txt to obi_wan.txt.
Charlies-MacBook-Pro:tatooine charliehumphrey$ mv ben_kenobi.txt obi_wan.txt

#Part II: cp - copy
#Copy storm_trooper.txt from death_star to tatooine
Charlies-MacBook-Pro:death_star charliehumphrey$ cp storm_trooper.txt ../tatooine

#Part IV: mv - move
#Move luke.txt and obi_wan.txt to the millenium_falcon
Charlies-MacBook-Pro:tatooine charliehumphrey$ mv luke.txt millenium_falcon/
Charlies-MacBook-Pro:tatooine charliehumphrey$ mv obi_wan.txt millenium_falcon/
#Move millenium_falcon out of tatooine and into galaxy_far_far_away
Charlies-MacBook-Pro:tatooine charliehumphrey$ mv millenium_falcon/ ..
#Move millenium_falcon into death_star
Charlies-MacBook-Pro:tatooine charliehumphrey$ cd ..
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ mv millenium_falcon/ death_star/
#Move princess_leia.txt into the millenium_falcon
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ cd death_star/
Charlies-MacBook-Pro:death_star charliehumphrey$ mv princess_leia.txt millenium_falcon/

#Part V: rm - remove
#Delete obi_wan.txt
Charlies-MacBook-Pro:death_star charliehumphrey$ cd millenium_falcon/
Charlies-MacBook-Pro:millenium_falcon charliehumphrey$ rm obi_wan.txt 

#Part VI: all together
#In galaxy_far_far_away, make a directory called yavin_4
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ mkdir yavin_4
#Move the millenium_falcon out of the death_star and into yavin_4
Charlies-MacBook-Pro:death_star charliehumphrey$ mv millenium_falcon/ ..yavin_4/
#Make a directory in yavin_4 called x_wing
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ cd yavin_4/
Charlies-MacBook-Pro:yavin_4 charliehumphrey$ mkdir x_wing
#Move princess_leia.txt to yavin_4 and luke.txt to x_wing
Charlies-MacBook-Pro:millenium_falcon charliehumphrey$ mv princess_leia.txt ../yavin_4/
Charlies-MacBook-Pro:millenium_falcon charliehumphrey$ mv luke.txt ../yavin_4/
#Move the millenium_falcon and x_wing out of yavin_4 and into galaxy_far_far_away
Charlies-MacBook-Pro:yavin_4 charliehumphrey$ mv millenium_falcon/ ..
Charlies-MacBook-Pro:yavin_4 charliehumphrey$ mv x_wing/ ..
#In death_star, create directories for tie_fighter_1, tie_fighter_2 and tie_fighter_3
Charlies-MacBook-Pro:death_star charliehumphrey$ mkdir tie_fighter_1
Charlies-MacBook-Pro:death_star charliehumphrey$ mkdir tie_fighter_2
Charlies-MacBook-Pro:death_star charliehumphrey$ mkdir tie_fighter_3
#Move darth_vader.txt into tie_fighter_1
Charlies-MacBook-Pro:death_star charliehumphrey$ mv darth_vader.txt tie_fighter_1
#Make a copy of storm_trooper.txt in both tie_fighter_2 and tie_fighter_3
Charlies-MacBook-Pro:death_star charliehumphrey$ cp storm_trooper.txt tie_fighter_2
Charlies-MacBook-Pro:death_star charliehumphrey$ cp storm_trooper.txt tie_fighter_3
#Move all of the tie_fighters out of the death_star and into galaxy_far_far_away
Charlies-MacBook-Pro:death_star charliehumphrey$ mv tie_fighter_1 ..
Charlies-MacBook-Pro:death_star charliehumphrey$ mv tie_fighter_2 ..
Charlies-MacBook-Pro:death_star charliehumphrey$ mv tie_fighter_3 ..

#Part VIII: The Final Act
#Touch a file in x_wing called the_force.txt
Charlies-MacBook-Pro:x_wing charliehumphrey$ touch the_force.txt
#Destroy the death_star and anyone inside of it.
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ rm -r death_star/
#Return x_wing and the millenium_falcon to yavin_4
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ mv x_wing yavin_4/
Charlies-MacBook-Pro:galaxy_far_far_away charliehumphrey$ millenium_falcon yavin_4/
#Celebrate!