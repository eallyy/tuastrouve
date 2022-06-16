import { Component, OnInit } from '@angular/core';
import { Case } from '../models/cases.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public caseID: string;
  public case: Case;
  pipe = new DatePipe('en-US');

  // Email Status Datas
  public emailStatusDatas = [
    {
      'website': 'twitter.com',
      'isUsing': 1
    },
    {
      'website': 'facebook.com',
      'isUsing': 1
    },
    {
      'website': 'instagram.com',
      'isUsing': 0
    }
  ];

  // Instagram Account Informations
  public instagramDatas = {
    'username': 'emiralany',
    'fullName': 'Emir Alanyalioglu',
    'userID': '2581264334',
    'isVerified': 'False',
    'isBusiness': 'False',
    'isPrivate': 'False',
    'followingCount': 457,
    'numberOfPosts': 3,
    'numberOfTagInPosts': 0,
    'externalUrl': 'emiralanyalioglu.com',
    'igtvPosts': 0,
    'biography': '💻 Digital Entrepreneur\n📀 Digital Content Producer\neallyy@icloud.com',
    'obfuscatedEmail': '*@i*****.com',
  };

  // Generic Username Informations
  public usernameDatas = [
    {
      'website': 'Docker Hub',
      'link': 'https://hub.docker.com/u/emiralany/',
    },
    {
      'website': 'Fiverr',
      'link': 'https://www.fiverr.com/emiralany',
    },
    {
      'website': 'Twitter',
      'link': 'https://twitter.com/emiralany',
    }
  ];

  // Web Profiles
  public webProfileDatas = [
    {
      'title': 'Wiki/User:emiralany - WikiCU, the Columbia University wiki encyclopedia',
      'link': 'https://wikicu.com/wiki/User:emiralany',
      'language': 'English',
      'country': 'unavailable',
      'text': 'Wiki/User:emiralany - WikiCU, the Columbia University wiki encyclopedia Wiki/User:emiralany From WikiCU Jump to: navigation , search There is currently no text in this page.\nYou can search for this page title in other pages, or search the related logs , but you do not have permission to create this page. Retrieved from " https://www.wikicu.com/Wiki/User:emiralany " Navigation menu Personal tools Log in Request account Namespaces Page Discussion Variants Views More Search Navigation Main page Community portal Recent changes Random article Help Tools What links here Special pages Printable version Page information Privacy policy About WikiCU Disclaimers',
      'type': 'Wiki',
      'rank': 5219742
    },
    {
      'title': 'emiralany on eBay',
      'link': 'https://ebay.com/usr/emiralany',
      'language': 'English',
      'country': 'United States',
      'text': 'emiralany on eBay Skip to main content Shop by category Enter your search keyword All Categories Advanced Hi ( Sign in to bid or buy) Daily Deals Help & Contact Ship to Loading... Error: Try Again Ok Sell Watchlist Expand Watch List to see your user information My eBay Expand My eBay Summary Recently Viewed Bids/Offers Purchase History Buy Again Selling Saved Searches Saved Sellers Messages Notification Expand Cart Something went wrong. View cart for details. "emiralanys profile" Change photo Remove Please sign in to make changes. "That file isnt supported. Please use JPG, GIF, PNG, and TIF files only." Image file is corrupted. Please try again. That image is too big. That image is too small. There was an unexpected service failure. Please try again. OK Are you sure you want to remove this photo? Cancel User ID emiralany Items for sale Contact Save Based in Turkey, emiralany has been an eBay member since Nov 29, 2021 Use this space to tell other eBay Members about yourself and what you’re passionate about. Give people more reasons to Follow you! Please save or cancel your changes. | Member since: Nov 29, 2021 Turkey Follow what inspires you "Like another members style? Follow them to see more of their great finds in your eBay feed." Okay, got it Additional site navigation About eBay Announcements Community Security Center Seller Information Center Policies Affiliates Site Map Copyright © 1995-2022 eBay Inc. All Rights Reserved. Accessibility , User Agreement Privacy Cookies Do not sell my personal information and AdChoice Norton Secured - powered by DigiCert',
      'type': 'E-commerce and Shopping > Marketplace',
      'rank': 41
    }

  ];

  constructor(private route: ActivatedRoute) { }

  printReport() {
    window.print();
    window.location.href = '/';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.caseID = params['case'];
    })

    this.case = new Case(3, 'Developer', 'Mr. Emir', 'me@emiralanyalioglu.com', '', 'eallyy', 'emiralany', this.pipe.transform(new Date('12 June 2022 7:06'), 'dd MMM YYYY h:mm a'), 2);
  }

}
