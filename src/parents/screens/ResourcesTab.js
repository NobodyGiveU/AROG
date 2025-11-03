import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../common/components/Header';

const ResourcesTab = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Recovery', 'Pain Management', 'Exercise', 'Nutrition'];

  const educationalContent = [
    {
      category: 'Recovery',
      title: 'Understanding Post-Surgical Recovery',
      description: 'A comprehensive guide to supporting your teen through recovery, pain management and rehabilitation.',
      author: 'Dr. Sarah Mitchell',
      readTime: '8 min'
    },
    {
      category: 'Pain Management',
      title: 'Pain Management Techniques',
      description: 'Learn effective, safe pain management strategies for athletic injuries in teenagers.',
      author: 'Lisa Chen, PT',
      readTime: '6 min'
    },
    {
      category: 'Exercise',
      title: 'Building a Safe Exercise Routine',
      description: 'How to create and maintain an injury-prevention exercise routine for young athletes.',
      author: 'Dr. Michael Thompson',
      readTime: '10 min'
    },
    {
      category: 'Nutrition',
      title: 'Nutrition for Athletic Recovery',
      description: 'Essential nutrition guidelines to support healing and athletic performance.',
      author: 'Emily Foster, RN',
      readTime: '7 min'
    }
  ];

  const communityStories = [
    {
      author: 'Anonymous Parent',
      title: "My Daughter's Recovery Journey",
      description: 'Sharing our experience through 6 months of ACL recovery and return to soccer.',
      posted: '2 days ago',
      comments: 24,
      category: 'Recovery'
    },
    {
      author: 'Sarah M.',
      title: 'Supporting Your Teen Through ACL Recovery',
      description: "Tips and lessons learned from our family's experience with teenage sports injury.",
      posted: '5 days ago',
      comments: 18,
      category: 'Recovery'
    }
  ];

  const nearbyClinics = [
    {
      name: 'Regional Children\'s Hospital',
      address: '123 Medical Center Drive, Springfield, CA 94105',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM',
      specialties: ['Sports Medicine', 'Physical Therapy', 'Orthopedics']
    },
    {
      name: 'Youth Sports Therapy Center',
      address: '456 Athletic Way, Springfield, CA 94106',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 7:00 AM - 7:00 PM, Sat-Sun: 8:00 AM - 4:00 PM',
      specialties: ['Physical Therapy', 'Injury Prevention', 'Recovery']
    },
    {
      name: 'Springfield Orthopedic Clinic',
      address: '789 Health Plaza, Springfield, CA 94107',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 8:30 AM - 5:30 PM',
      specialties: ['Orthopedic Surgery', 'Sports Medicine', 'Rehabilitation']
    }
  ];

  const renderEducationalCard = (item) => (
    <TouchableOpacity style={styles.card} key={item.title}>
      <View style={styles.categoryTag}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.authorText}>{item.author}</Text>
        <View style={styles.readTimeContainer}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.readTimeText}>{item.readTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCommunityStory = (item) => (
    <TouchableOpacity style={styles.storyCard} key={item.title}>
      <View style={styles.categoryTag}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.storyFooter}>
        <Text style={styles.postedText}>Posted {item.posted}</Text>
        <View style={styles.commentsContainer}>
          <Ionicons name="chatbubble-outline" size={16} color="#666" />
          <Text style={styles.commentsText}>{item.comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Guardian Dashboard" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search topics, articles, or clinics..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education Library</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.categoryButtonTextActive,
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.cardsContainer}>
            {educationalContent
              .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
              .map(renderEducationalCard)}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Stories</Text>
          <View style={styles.cardsContainer}>
            {communityStories.map(renderCommunityStory)}
          </View>
          <TouchableOpacity style={styles.shareStoryButton}>
            <Ionicons name="share-outline" size={20} color="#6B4EFF" />
            <Text style={styles.shareStoryText}>Want to inspire others? Share your story</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Clinics & Specialists</Text>
          <View style={styles.subtitle}>
            <Ionicons name="information-circle-outline" size={16} color="#666" />
            <Text style={styles.subtitleText}>Suggestions are based on your area</Text>
          </View>

          {nearbyClinics.map((clinic) => (
            <View key={clinic.name} style={styles.clinicCard}>
              <View style={styles.clinicHeader}>
                <View style={styles.clinicIcon}>
                  <Ionicons name="medical" size={24} color="#6B4EFF" />
                </View>
                <Text style={styles.clinicName}>{clinic.name}</Text>
              </View>

              <View style={styles.clinicInfo}>
                <View style={styles.infoRow}>
                  <Ionicons name="location-outline" size={16} color="#6B4EFF" />
                  <Text style={styles.infoText}>{clinic.address}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Ionicons name="call-outline" size={16} color="#6B4EFF" />
                  <Text style={styles.infoText}>{clinic.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Ionicons name="time-outline" size={16} color="#6B4EFF" />
                  <Text style={styles.infoText}>{clinic.hours}</Text>
                </View>
              </View>

              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.specialtiesScroll}
              >
                {clinic.specialties.map((specialty) => (
                  <View key={specialty} style={styles.specialtyTag}>
                    <Text style={styles.specialtyText}>{specialty}</Text>
                  </View>
                ))}
              </ScrollView>

              <TouchableOpacity style={styles.suggestButton}>
                <Text style={styles.suggestButtonText}>Suggest to Child</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 16,
    color: '#000',
  },
  categoryScroll: {
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 4,
  },
  categoryButtonActive: {
    backgroundColor: '#6B4EFF',
  },
  categoryButtonText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: '#FFFFFF',
  },
  cardsContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryTag: {
    backgroundColor: '#F0E7FF',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 12,
  },
  categoryText: {
    color: '#6B4EFF',
    fontSize: 12,
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorText: {
    fontSize: 14,
    color: '#666',
  },
  readTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readTimeText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  storyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  storyFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  postedText: {
    fontSize: 12,
    color: '#666',
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  shareStoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0E7FF',
    marginHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6B4EFF',
    borderStyle: 'dashed',
  },
  shareStoryText: {
    marginLeft: 8,
    color: '#6B4EFF',
    fontSize: 14,
    fontWeight: '500',
  },
  subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  subtitleText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  clinicCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  clinicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  clinicIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  clinicName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  clinicInfo: {
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
    flex: 1,
  },
  specialtiesScroll: {
    marginBottom: 12,
  },
  specialtyTag: {
    backgroundColor: '#F0E7FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  specialtyText: {
    color: '#6B4EFF',
    fontSize: 14,
    fontWeight: '500',
  },
  suggestButton: {
    backgroundColor: '#6B4EFF',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  suggestButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ResourcesTab;
