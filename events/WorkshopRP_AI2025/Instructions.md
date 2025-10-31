# Preparation for the Workshop
This document is for online attendees. All steps must be completed before the event, as they may take some time to load.
If you have any doubts or problems, please get in touch with us by email: douglas.samuel@usp.com or during the Google Meet on Friday, June 27, 2025, https://meet.google.com/vpk-wjgh-fip.

## Download the Datasets
- **Hands-on**: https://www.dropbox.com/scl/fo/17bod43bcev1oszsj90n9/ANXEtL9Sx5RWddVMD3XdoG0?rlkey=fx4m2whnsqd9o0o74jbnbmzlg&e=1&dl=0

## Download 3D Slicer
Following your OS, download the software by clicking on one of the links below. 

- **Windows**: https://drive.google.com/file/d/1w7krHAIdSLB2KHPFj_X931x1qbve3ZYN/view?usp=sharing
- **MacOS**: https://drive.google.com/file/d/1XBvBdQoVkIYXsxdnMMNftTeaxE4DZlK6/view?usp=sharing
- **Linux**: https://drive.google.com/file/d/1w_c2k792468Iw0QhmmYuHesdkNUpxfLM/view?usp=sharing

If you want to follow the YouTube Video: [Installation 3D Slicer](https://www.youtube.com/watch?v=_KsyJvQ18gY)

At the end of this step, you should have 3D Slicer open, as shown in the screenshot below.
![image](https://github.com/user-attachments/assets/1a8d681a-bf6f-447b-9947-5dc5ac709c88)

## Installing the extensions
For this workshop, we need to install three extensions: TotalSegmentator, MonaiAuto3DSeg, and LanguagesPacks. 
The first two allow us to run AI models to automatically segment our data, and the last allows us to use Slicer in other languages.

- Click on the extension manager
  ![image](https://github.com/user-attachments/assets/f81b98ae-7098-4241-aebc-5ddd98889a47)
- Search for TotalSegmentator in the search bar and click on install
  ![image](https://github.com/user-attachments/assets/0951c816-8b4a-4512-85ab-4bb8c2f52569)
- Search for MonaiAuto3DSeg in the search bar and click on install
  ![image](https://github.com/user-attachments/assets/15e20b3c-4ce4-4e95-9086-2ee09610fbd5)
- Search for LanguagesPacks in the search bar and click on install
  ![image](https://github.com/user-attachments/assets/62cce39d-5342-4880-a785-3d7750736c60)
- Now click the restart button, the software will restart and install the extensions
  ![image](https://github.com/user-attachments/assets/7362c8a3-5e46-4bd8-b8cf-45c1f7ab5059)

If you want to follow the YouTube Video: [Extension Installation 3D Slicer](https://youtu.be/YVK97ws6fHc)

At the end of this step, you should have these extensions available inside the software.
![image](https://github.com/user-attachments/assets/9c21ed13-b1e8-4ff1-845e-29ca0fc9c0a0)

## Configuring the software language
To use the software in Portuguese, follow these steps. If you want to continue to use English, you can go to the next step, "Loading the model."
- Open the Language Tools module
  ![image](https://github.com/user-attachments/assets/f7e38a94-3297-4864-9203-3b02dba79c1b)
- Select Weblate (latest translations), in language options select Portuguese (Brazil) (pt-BR)
  ![image](https://github.com/user-attachments/assets/872da20d-c014-4129-afb7-f7385d939d26)
- Click on the Update translations files button, wait for the message "Updated completed! ..."
  ![image](https://github.com/user-attachments/assets/b1b22b3e-6d2d-4887-a556-2f8fdf59fbaf)
- Then select the Portuguese language and click restart
  ![image](https://github.com/user-attachments/assets/d77835da-1715-400f-829b-dd3b4fa65dd4)

At the end of this step, you should have the interface in Portuguese.
![image](https://github.com/user-attachments/assets/35501117-ca48-457d-9fb1-c79e13d282cb)

## Loading the model
This is the most important part that needs to be done before the event; loading a model can take several minutes, and you probably will not have time to do it during the workshop.
- Click on "Download Sample Data."
  ![image](https://github.com/user-attachments/assets/94eb0c83-b3c7-4b82-a85c-2be3952b90a0)
- Click "CTChest"
  ![image](https://github.com/user-attachments/assets/907a96c5-74d0-4463-8d37-d972233064b0)
- At the end of this process, you should have the data loaded, like below
  ![image](https://github.com/user-attachments/assets/db3dab21-2ff8-43d8-8570-2434b3c65175)
- Go to the TotalSegmentator module
  ![image](https://github.com/user-attachments/assets/621703a7-3bac-4d24-8d1c-ab3fe95deb14)
- Select "CTChest" at the "Input volume" field and click on the "Apply" button
  ![image](https://github.com/user-attachments/assets/cbc78fd6-1b47-4037-940f-60bfdc313feb)
- When this pop-up appears, click on the "OK" button
  ![image](https://github.com/user-attachments/assets/7142b524-04fe-4849-92ed-185df3e0910a)
- If the "No GPU is detected" pop-up appears, click on the "Fast" option
  ![image](https://github.com/user-attachments/assets/455a7c1e-4ea6-4ac2-bd5b-c4b71243d5f2)
- At the end of this process, you should have the model segmented like below
  ![image](https://github.com/user-attachments/assets/d8955ebb-c907-4be7-907b-e103bbfaa3b6)

