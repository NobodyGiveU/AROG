import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../../../colors';
import { educationArticles, clinicInformation, resourceCategories } from '../data/resourcesData';

const ResourcesTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponses, setAiResponses] = useState([]);

  // Community stories
  const communityStories = [
    {
      id: 1,
      title: 'My Daughter\'s Recovery Journey',
      excerpt: 'How we navigated the first 6 weeks post-surgery...',
      category: 'Recovery',
      anonymous: true,
    },
    {
      id: 2,
      title: 'Supporting Your Teen Through ACL Recovery',
      excerpt: 'Tips from a parent who\'s been through it...',
      category: 'Parent Support',
      anonymous: true,
    },
    {
      id: 3,
      title: 'The Importance of Consistency',
      excerpt: 'Why daily exercises made all the difference...',
      category: 'Exercise',
      anonymous: true,
    },
  ];

  const filteredArticles = educationArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAIQuestion = () => {
    if (aiQuestion.trim()) {
      // Dummy AI response
      const response = `Based on your question about "${aiQuestion}", here's helpful information...`;
      setAiResponses([...aiResponses, { question: aiQuestion, answer: response, timestamp: new Date() }]);
      setAiQuestion('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.card}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search resources..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {['all', ...resourceCategories].map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  selectedCategory === category && styles.categoryChipActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryChipText,
                    selectedCategory === category && styles.categoryChipTextActive,
                  ]}
                >
                  {category === 'all' ? 'All' : category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Education Library */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Education Library</Text>
          <Text style={styles.sectionSubtitle}>Videos and guides about ACL prevention, safe landing techniques</Text>
          
          {filteredArticles.map((article) => (
            <TouchableOpacity key={article.id} style={styles.articleItem}>
              <View style={styles.articleHeader}>
                <Text style={styles.articleTitle}>{article.title}</Text>
                {article.bookmarked && <Text style={styles.bookmarkIcon}>🔖</Text>}
              </View>
              <Text style={styles.articleSummary}>{article.summary}</Text>
              <View style={styles.articleMeta}>
                <Text style={styles.articleAuthor}>{article.author}</Text>
                <Text style={styles.articleTime}>• {article.readTime} read</Text>
                <Text style={styles.articleCategory}>• {article.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Community Stories */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Community Stories</Text>
          <Text style={styles.sectionSubtitle}>Anonymous recovery stories from other athletes (parent-focused)</Text>
          
          {communityStories.map((story) => (
            <TouchableOpacity key={story.id} style={styles.storyItem}>
              <Text style={styles.storyTitle}>{story.title}</Text>
              <Text style={styles.storyExcerpt}>{story.excerpt}</Text>
              <View style={styles.storyMeta}>
                <Text style={styles.storyCategory}>{story.category}</Text>
                {story.anonymous && <Text style={styles.anonymousBadge}>Anonymous</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Local Clinics */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Local Clinics</Text>
          <Text style={styles.sectionSubtitle}>Directory of nearby sports medicine providers</Text>
          
          <View style={styles.clinicCard}>
            <Text style={styles.clinicName}>{clinicInformation.primaryClinic.name}</Text>
            <Text style={styles.clinicAddress}>{clinicInformation.primaryClinic.address}</Text>
            <Text style={styles.clinicAddress}>
              {clinicInformation.primaryClinic.city}, {clinicInformation.primaryClinic.state} {clinicInformation.primaryClinic.zip}
            </Text>
            <Text style={styles.clinicPhone}>📞 {clinicInformation.primaryClinic.phone}</Text>
            <Text style={styles.clinicHours}>
              Hours: {clinicInformation.primaryClinic.hours.weekdays}
            </Text>
            <TouchableOpacity style={styles.suggestButton}>
              <Text style={styles.suggestButtonText}>💡 Suggest to Child</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.clinicCard}>
            <Text style={styles.clinicName}>{clinicInformation.physicalTherapyCenter.name}</Text>
            <Text style={styles.clinicAddress}>{clinicInformation.physicalTherapyCenter.address}</Text>
            <Text style={styles.clinicAddress}>
              {clinicInformation.physicalTherapyCenter.city}, {clinicInformation.physicalTherapyCenter.state} {clinicInformation.physicalTherapyCenter.zip}
            </Text>
            <Text style={styles.clinicPhone}>📞 {clinicInformation.physicalTherapyCenter.phone}</Text>
            <Text style={styles.clinicHours}>
              Hours: {clinicInformation.physicalTherapyCenter.hours.weekdays}
            </Text>
            <TouchableOpacity style={styles.suggestButton}>
              <Text style={styles.suggestButtonText}>💡 Suggest to Child</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* AI Chat */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>AI Chat</Text>
          <Text style={styles.sectionSubtitle}>Ask questions about recovery, exercises, what things mean</Text>
          
          {aiResponses.map((response, index) => (
            <View key={index} style={styles.aiResponseContainer}>
              <Text style={styles.aiQuestionText}>Q: {response.question}</Text>
              <Text style={styles.aiAnswerText}>A: {response.answer}</Text>
              <Text style={styles.aiTime}>
                {new Date(response.timestamp).toLocaleString()}
              </Text>
            </View>
          ))}

          <View style={styles.aiInputContainer}>
            <TextInput
              style={styles.aiInput}
              placeholder="Ask a question..."
              placeholderTextColor={colors.textSecondary}
              value={aiQuestion}
              onChangeText={setAiQuestion}
              multiline
            />
            <TouchableOpacity
              style={styles.aiSendButton}
              onPress={handleAIQuestion}
            >
              <Text style={styles.aiSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  searchInput: {
    height: 50,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  categoryScroll: {
    marginTop: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.background,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryChipActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  categoryChipText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: colors.white,
  },
  articleItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  bookmarkIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  articleSummary: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  articleAuthor: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  articleTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  articleCategory: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '600',
  },
  storyItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  storyExcerpt: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  storyMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storyCategory: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '600',
  },
  anonymousBadge: {
    fontSize: 11,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  clinicCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  clinicName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  clinicAddress: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  clinicPhone: {
    fontSize: 14,
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  clinicHours: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  suggestButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  suggestButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  aiResponseContainer: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  aiQuestionText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  aiAnswerText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 4,
  },
  aiTime: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
  },
  aiInputContainer: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  aiInput: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.border,
    maxHeight: 100,
  },
  aiSendButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  aiSendButtonText: {
    color: colors.white,
    fontWeight: '600',
  },
});

export default ResourcesTab;

