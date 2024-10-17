import type { UsersSeed, QuestionsToSeed } from "@/interfaces";
import { db } from ".";
import {
	comments,
	forms,
	formTags,
	likes,
	questions,
	tags,
	users,
} from "./schemas";
import { hashPassword } from "@/utils/password";
import "dotenv/config";
import { sql } from "drizzle-orm";

const usersToSeed: UsersSeed[] = [
	{
		name: "Admin",
		email: "admin@formmaster.com",
		password: process.env.ADMIN_PASSWORD ?? "",
		role: "user",
		status: "active",
	},
	{
		name: "Bob",
		email: "bob@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Charlie",
		email: "charlie@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Diana",
		email: "diana@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Eve",
		email: "eve@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Frank",
		email: "frank@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Grace",
		email: "grace@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Hank",
		email: "hank@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Ivy",
		email: "ivy@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Jack",
		email: "jack@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Kara",
		email: "kara@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Leo",
		email: "leo@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Mia",
		email: "mia@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Nina",
		email: "nina@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Oscar",
		email: "oscar@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Paul",
		email: "paul@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Quinn",
		email: "quinn@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Rita",
		email: "rita@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Sam",
		email: "sam@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Tina",
		email: "tina@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
];

const formsToSeed = [
	{
		author_id: 1,

		title: "What do you think about Apples?",
		topic: "Animals",
		description:
			"#This is a form about apples  \n I would like to know what do you think about apples, your opinions, your experiences and your feelings about them",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 1,
		title: "Do you like Dogs?",
		topic: "Pets",
		description:
			"#This is a form about dogs  \n I would like to know your experiences with dogs, your favorite breeds, and how they impact your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 2,
		title: "Your Thoughts on Climate Change?",
		topic: "Environment",
		description:
			"#This is a form about climate change  \n Share your thoughts, concerns, and actions you are taking to combat climate change",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 2,
		title: "Favorite Books of All Time",
		topic: "Literature",
		description:
			"#This is a form about favorite books  \n Tell us about your favorite books, why they are special to you, and how they have impacted your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 2,
		title: "Best Travel Destinations",
		topic: "Travel",
		description:
			"#This is a form about travel  \n Share your favorite travel destinations, experiences, and tips for fellow travelers",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 3,
		title: "Healthy Eating Habits",
		topic: "Health",
		description:
			"#This is a form about healthy eating  \n Share your tips, favorite recipes, and how healthy eating has improved your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 5,
		title: "Technological Innovations",
		topic: "Technology",
		description:
			"#This is a form about technology  \n Discuss the latest technological innovations, their impact on society, and future trends",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 8,
		title: "Music That Moves You",
		topic: "Music",
		description:
			"#This is a form about music  \n Share your favorite genres, artists, and how music influences your mood and daily life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 9,
		title: "Fitness Routines",
		topic: "Fitness",
		description:
			"#This is a form about fitness  \n Describe your fitness routines, favorite workouts, and how you stay motivated",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 10,
		title: "The Future of Work",
		topic: "Business",
		description:
			"#This is a form about the future of work  \n Discuss trends, remote work, and how the workplace is evolving",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 11,
		title: "Learning New Languages",
		topic: "Education",
		description:
			"#This is a form about learning languages  \n Share your experiences, tips, and challenges in learning new languages",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 12,
		title: "Artistic Expressions",
		topic: "Art",
		description:
			"#This is a form about art  \n Discuss your favorite art forms, artists, and how art impacts your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 13,
		title: "Sustainable Living",
		topic: "Sustainability",
		description:
			"#This is a form about sustainable living  \n Share your practices, ideas, and how you contribute to a sustainable lifestyle",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 14,
		title: "Gaming Communities",
		topic: "Gaming",
		description:
			"#This is a form about gaming  \n Discuss your favorite games, communities, and how gaming has influenced your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 15,
		title: "Gardening Tips",
		topic: "Gardening",
		description:
			"#This is a form about gardening  \n Share your gardening tips, favorite plants, and how gardening benefits your well-being",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 16,
		title: "Cooking Adventures",
		topic: "Cooking",
		description:
			"#This is a form about cooking  \n Share your favorite recipes, cooking tips, and how cooking has become a part of your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 17,
		title: "Mental Health Awareness",
		topic: "Mental Health",
		description:
			"#This is a form about mental health  \n Discuss the importance of mental health, personal experiences, and ways to maintain mental well-being",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 18,
		title: "Fashion Trends",
		topic: "Fashion",
		description:
			"#This is a form about fashion  \n Share your favorite fashion trends, designers, and how fashion influences your identity",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 19,
		title: "Photography Techniques",
		topic: "Photography",
		description:
			"#This is a form about photography  \n Discuss your favorite photography techniques, equipment, and how photography has become a hobby",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 20,
		title: "Personal Finance Tips",
		topic: "Finance",
		description:
			"#This is a form about personal finance  \n Share your tips on budgeting, saving, and investing for a secure financial future",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
];

const questionsToSeed: QuestionsToSeed[] = [
	{
		formId: 1,
		question: "What is your favorite type of apple?",
		description: "Please select your favorite apple variety.",
		displayInTable: true,
		order: 1,
		type: "multiple",
	},
	{
		formId: 1,
		question: "Why do you like or dislike apples?",
		description: "Share your reasons for liking or disliking apples.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 1,
		question: "How often do you eat apples?",
		description: "Answer in number of times per week.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 1,
		question: "What is your favorite way to consume apples?",
		description: "e.g., fresh, juice, pie.",
		displayInTable: true,
		order: 4,
		type: "short",
	},

	{
		formId: 2,
		question: "Do you have a dog?",
		description: "Yes or No.",
		displayInTable: true,
		order: 1,
		type: "multiple",
	},
	{
		formId: 2,
		question: "What is your favorite dog breed?",
		description: "If you have one, share your favorite breed.",
		displayInTable: false,
		order: 2,
		type: "short",
	},
	{
		formId: 2,
		question: "How many dogs have you had in your life?",
		description: "Provide the total number.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 2,
		question: "Why do you think dogs are good companions?",
		description: "Explain the reasons why dogs make good companions.",
		displayInTable: false,
		order: 4,
		type: "long",
	},

	{
		formId: 3,
		question: "Do you believe climate change is real?",
		description: "Select Yes or No.",
		displayInTable: true,
		order: 1,
		type: "multiple",
	},
	{
		formId: 3,
		question: "What actions do you take to combat climate change?",
		description:
			"Share your actions, e.g., recycling, reducing carbon footprint.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 3,
		question: "How concerned are you about climate change?",
		description: "Rate your concern on a scale of 1 to 10.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 3,
		question: "What do you think is the biggest cause of climate change?",
		description: "Provide your opinion on the main cause.",
		displayInTable: false,
		order: 4,
		type: "short",
	},
	{
		formId: 4,
		question: "What is your favorite book?",
		description: "Name your favorite book.",
		displayInTable: true,
		order: 1,
		type: "short",
	},
	{
		formId: 4,
		question: "Why is this book special to you?",
		description: "Explain what makes the book special to you.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 4,
		question: "How many books do you read per year?",
		description: "Provide the average number of books you read annually.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 4,
		question: "Which genre do you enjoy the most?",
		description: "Select your favorite book genre.",
		displayInTable: true,
		order: 4,
		type: "multiple",
	},
	{
		formId: 5,
		question: "What is your favorite travel destination?",
		description: "Name your favorite place to visit.",
		displayInTable: true,
		order: 1,
		type: "short",
	},
	{
		formId: 5,
		question: "Why do you recommend this destination?",
		description: "Share the reasons why you recommend visiting this place.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 5,
		question: "How many countries have you visited?",
		description: "Provide the total number of countries you've visited.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 5,
		question: "What is your preferred type of travel?",
		description: "e.g., solo, family, adventure, luxury.",
		displayInTable: true,
		order: 4,
		type: "multiple",
	},
];

const tagsToSeed = [
	{ tag: "Animals" },
	{ tag: "Business" },
	{ tag: "Education" },
	{ tag: "Environment" },
	{ tag: "Finance" },
	{ tag: "Health" },
	{ tag: "History" },
	{ tag: "Literature" },
	{ tag: "Maths" },
	{ tag: "Science" },
	{ tag: "Sports" },
	{ tag: "Technology" },
];

const formTagsToSeed = [
	{ form_id: 1, tag_id: 1 },
	{ form_id: 1, tag_id: 3 },
	{ form_id: 1, tag_id: 5 },
	{ form_id: 2, tag_id: 2 },
	{ form_id: 2, tag_id: 4 },
	{ form_id: 2, tag_id: 6 },
	{ form_id: 3, tag_id: 3 },
	{ form_id: 3, tag_id: 7 },
	{ form_id: 3, tag_id: 9 },
	{ form_id: 4, tag_id: 4 },
	{ form_id: 4, tag_id: 8 },
	{ form_id: 4, tag_id: 10 },
	{ form_id: 5, tag_id: 5 },
	{ form_id: 5, tag_id: 11 },
	{ form_id: 6, tag_id: 6 },
	{ form_id: 6, tag_id: 12 },
	{ form_id: 7, tag_id: 1 },
	{ form_id: 7, tag_id: 7 },
	{ form_id: 7, tag_id: 9 },
	{ form_id: 8, tag_id: 2 },
	{ form_id: 8, tag_id: 8 },
	{ form_id: 8, tag_id: 10 },
	{ form_id: 9, tag_id: 3 },
	{ form_id: 9, tag_id: 11 },
	{ form_id: 9, tag_id: 12 },
	{ form_id: 10, tag_id: 4 },
	{ form_id: 10, tag_id: 6 },
	{ form_id: 10, tag_id: 9 },
	{ form_id: 11, tag_id: 5 },
	{ form_id: 11, tag_id: 7 },
	{ form_id: 11, tag_id: 10 },
	{ form_id: 12, tag_id: 6 },
	{ form_id: 12, tag_id: 12 },
	{ form_id: 13, tag_id: 1 },
	{ form_id: 13, tag_id: 4 },
	{ form_id: 13, tag_id: 8 },
	{ form_id: 14, tag_id: 2 },
	{ form_id: 14, tag_id: 5 },
	{ form_id: 14, tag_id: 11 },
	{ form_id: 15, tag_id: 3 },
	{ form_id: 15, tag_id: 7 },
	{ form_id: 16, tag_id: 4 },
	{ form_id: 16, tag_id: 9 },
	{ form_id: 17, tag_id: 1 },
	{ form_id: 17, tag_id: 6 },
	{ form_id: 18, tag_id: 2 },
	{ form_id: 18, tag_id: 8 },
	{ form_id: 19, tag_id: 3 },
	{ form_id: 19, tag_id: 10 },
	{ form_id: 20, tag_id: 4 },
	{ form_id: 20, tag_id: 12 },
];

const totalForms = 20;
const totalUsers = 20;

const generateRandomLikes = () => {
	const randomFormId = Math.floor(Math.random() * totalForms) + 1;
	const randomUserId = Math.floor(Math.random() * totalUsers) + 1;

	return { form_id: randomFormId, user_id: randomUserId };
};

const likesToSeed = () => {
	const likes = [];

	for (let i = 0; i < 30; i++) {
		likes.push(generateRandomLikes());
	}

	return likes;
};

const commentsToSeed = [
	{ user_id: 1, form_id: 1, comment: "Great form!" },
	{ user_id: 2, form_id: 1, comment: "Very helpful, thanks!" },
	{ user_id: 3, form_id: 1, comment: "I loved the design!" },

	{ user_id: 1, form_id: 2, comment: "Interesting questions!" },
	{ user_id: 2, form_id: 2, comment: "Could use more options." },

	{ user_id: 1, form_id: 3, comment: "Simple and effective." },
	{ user_id: 3, form_id: 3, comment: "Good for feedback." },
	{ user_id: 2, form_id: 3, comment: "Loved it!" },

	{ user_id: 1, form_id: 4, comment: "I have some suggestions." },
	{ user_id: 3, form_id: 4, comment: "Great overall experience!" },
	{ user_id: 2, form_id: 4, comment: "Would recommend!" },

	{ user_id: 1, form_id: 5, comment: "Nice layout!" },
	{ user_id: 2, form_id: 5, comment: "Easy to fill out." },
	{ user_id: 3, form_id: 5, comment: "Good questions!" },
	{ user_id: 3, form_id: 5, comment: "I enjoyed this." },

	{ user_id: 1, form_id: 6, comment: "Not bad!" },
	{ user_id: 2, form_id: 6, comment: "Could be improved." },
	{ user_id: 1, form_id: 6, comment: "Very useful!" },

	{ user_id: 3, form_id: 7, comment: "Awesome form!" },
	{ user_id: 2, form_id: 7, comment: "Had some issues." },
	{ user_id: 1, form_id: 7, comment: "Will use again!" },
	{ user_id: 3, form_id: 7, comment: "Loved the design!" },

	{ user_id: 2, form_id: 8, comment: "Great job!" },
	{ user_id: 1, form_id: 8, comment: "I appreciate the effort." },
	{ user_id: 3, form_id: 8, comment: "Very helpful!" },
	{ user_id: 2, form_id: 8, comment: "Thanks for this!" },

	{ user_id: 1, form_id: 9, comment: "Would love to see more forms!" },
	{ user_id: 3, form_id: 9, comment: "Keep it up!" },

	{ user_id: 2, form_id: 10, comment: "Very insightful." },
	{ user_id: 1, form_id: 10, comment: "Had a great experience!" },
	{ user_id: 3, form_id: 10, comment: "Nice questions!" },
];

const seed = async () => {
	const usersToInsert = await Promise.all(
		usersToSeed.map(async (user) => ({
			...user,
			password: await hashPassword(user.password),
		})),
	);

	await db.insert(users).values(usersToInsert);
	await db.insert(forms).values(formsToSeed);
	await db.insert(questions).values(questionsToSeed);
	await db.insert(tags).values(tagsToSeed);
	await db.insert(formTags).values(formTagsToSeed);
	await db.insert(likes).values(likesToSeed());
	await db.insert(comments).values(commentsToSeed);

	return "SUCCESS";
};

//*NOT WORKING, TO BE FIXED
const modifyColumnsToAddFullTextSearch = () => {
	sql`
  ALTER TABLE forms ADD FULLTEXT(description, topic, title);

  ALTER TABLE comments ADD FULLTEXT(comment);

  ALTER TABLE questions ADD FULLTEXT(description, question);`;

	return "SUCCESS";
};

modifyColumnsToAddFullTextSearch();
seed();
